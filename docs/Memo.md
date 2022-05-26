# 覚書

制作中に新しく知ったこととかのメモ

## React

### ComponentのPropsの特定プロパティの型を使いたい

ComponentのPropsの特定プロパティの型を使いたいが、わざわざexportまではしたくないという時が結構ある。

そういう時は以下のようにすればexportせずとも型を使える。

```typescript
type ButtonComponentProps = React.ComponentProps<typeof ButtonComponent>

type Color = ButtonComponentProps['color']
```


## React18

最終的にはReact17にダウングレードしたが、当初React18を使っていて色々問題が出てきたのでまとめておく。

### ReactQueryのテストが動作しない

```typescript jsx
test('サンプルテスト', async () => {
  const queryClient = new QueryClient()
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  const { result } = renderHook(() => useCustomHook(), { wrapper })

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual('Hello')
})
```

[公式](https://react-query.tanstack.com/guides/testing)通り、こんな感じのテストを書いても `result.current.data` が `undefined` となっており動作しない。（ `@testing-library/react` の `13.2.0` 時点）

一旦諦める。

### StrictMode時にuseEffectが二回呼ばれる件に関して

たまに以下のように対策すればいいというコメントを見かける。

```typescript jsx
const [isFirst, setIsFirst] = useState(true)

useEffect(() => {
  if (!isFirst) return

  setIsFirst(false)

  // 実際にしたい処理
}, [isFirst])
```

でも、このコードでは実際ちゃんと意図通りの動作をしない。`if (!isFirst) return` 以降の処理が二回実行されてしまう。

というのも、StrictModeにて発生するuseEffectの二回目は**レンダリング無しに実行される**ためだ。

この動作は正直疑問に思っている。というのも実際OffscreenAPIが実装される際にマジでレンダリング無しに再実行されるの？という点がどうなのという感じ。

今までuseEffectは例外なくレンダリング後にdepsをチェックして、変化があれば実行というレンダリングとセットだという認識だったが、それが崩れてしまうとuseEffect内で同期的な処理であっても最新の状態を取ってこれない可能性が出てくる。今まで非同期処理であればそのケースは想定しないといけなかったが、それが同期処理まで広がってしまう。

実際、どうやれば対策になるのかというと。

```typescript jsx
const didLogRef = useRef(false);

useEffect(() => {
  // In this case, whether we are mounting or remounting,
  // we use a ref so that we only log an impression once.
  if (didLogRef.current === false) {
    didLogRef.current = true;

    SomeTrackingAPI.logImpression();
  }
}, []);
```

このようにuseRefを使う形になる。うーん…

[React v18 での Effects に関する変更内容（予定）](https://blog.koba04.com/post/2021/06/16/effects-in-react-v18)


## React Hook Form

### input[type=number] で文字列でなく数値を返すようにしてほしい

**「追記」**

valueAsNumberは空文字の際にNaNが返される。型上はnumberとして振る舞われてしまうので気づかずNaNが紛れ込んでしまうことが起こりやすいので余り使わないほうがよさそう。

[[React] input[type=number]のvalueをnumberとして扱うかstringとして扱うか - SDMILIEU](https://www.sd-milieu.net/posts/react-input-number-type/)

---

`valueAsNumber` というフラグが用意されており、これをtrueにすれば数値として返してくれる。

[useForm - register](https://react-hook-form.com/api/useform/register)

```typescript jsx
<input
  type="number"
  {...register("test", {
    valueAsNumber: true,
  })}
/>
```

ちなみに、素のブラウザAPIでもこれが存在する。

[elInput.valueAsNumberで最初から数値（知名度が低いウェブ標準ひとりAdvent Calendar 2021 – 13日目）](https://ginpen.com/2021/12/13/value-as-number/)

### Jest28にて、zodResolverを用いたコードをテストしようとすると `SyntaxError: Cannot use import statement outside a module` が発生して失敗する。

https://github.com/react-hook-form/resolvers/issues/396#issuecomment-1114248072

このコメントに従って対応すればいい。

あくまでワークアラウンドなので、公式が対応次第消す必要はある。

### フロントとバックのバリデーションロジックの共通化に関して

両方ともTypeScriptだし同じリポジトリだから簡単に共通化できそうだけど、今回は出来ていない。少なくともReactHookForm+zodの場合だと出来るケースは実際多くないと思っている。

理由は以下。

- `input[type=number]` の項目はバックエンド的には `z.number()` でスキーマ定義するところが多いと思うが、その場合 `valueAsNumber` を使用しないといけない。
  - `valueAsNumber` を使うのは色々問題が起こるので `z.string()` と文字列として扱う方針に今回はしているし、これからもそうしたい。
  - [[React] input[type=number]のvalueをnumberとして扱うかstringとして扱うか - SDMILIEU](https://www.sd-milieu.net/posts/react-input-number-type/)
- フロントエンドでは２つの `input[type=text]` だが、バックエンドにわたすときには一つの文字列となるような「フォームの形とリクエストボディの形が異なる」ケースに対応できない。
  - 今回は該当しなかったが、割と多いイメージ。


## StoryBook

### `@storybook/react` の `6.4.22` において、引数プロパティを使用すると正常に動作しない

```typescript
export class InMemoryFoodstuffRepository implements IFoodstuffRepository {
  constructor(public foodstuffs: Foodstuff[] = []) {
  }

  // 省略
}
```

こんな感じで引数プロパティを使用すると、 `this.foodstuffs` がundefinedになってしまった。

引数プロパティはJSにない仕様なので、おそらくTypeScriptのコンパイルがおかしくなっていると思われる。


## DaisyUI

[daisyUI — Tailwind CSS Components](https://daisyui.com/)

### メリデメ

- メリット
    - HTML/CSSのみで構成されているコンポーネント集なので薄く、何が起こっているのかわかりやすい。
    - テーマの仕組みが良い。公式で提供されている色を使うだけでテーマ対応できる。
- デメリット
    - Reactのために作られた物ではないので、リッチな動きが必要なコンポーネントは用意されていない。
    - iOSで使いやすくするためには調整が必要（後述）

### inputのfont-sizeが16px未満なのでiOSでフォーカス時にズームされてしまう

```css
.input {
  @apply text-base;
}
```

このようなCSSを書いてフォントサイズを16px以上にする必要がある。

[Customize daisyUI components — Tailwind CSS Components](https://daisyui.com/docs/customize/)

### 提供されているDrawerを使うと、iOSの最上部タップでのスクロールが効かなくなる

Drawerを使う際は、 `drawer-content` の中にページのコンテンツを入れていくのが公式的なやり方なんだけど、 `drawer-content` に `overflow: auto` を指定しておりその影響でiOSの最上部タップが効かなくなってしまい使い勝手に悪影響がある。

なので、自分は公式の物を使わず以下のようなDrawerコンポーネントを作った。

```typescript jsx
export const DrawerComponent = ({
  active,
  onClickOverlay,
  children,
}: {
  active: boolean
  onClickOverlay: () => void
  children: ReactNode
}) => {
  return (
    <div
      className={classNames([
        'fixed z-10 inset-0 transition-opacity',
        {
          'opacity-100': active,
          'opacity-0 pointer-events-none': !active,
        },
      ])}
    >
      <div
        className="absolute inset-0 bg-neutral opacity-40"
        onClick={onClickOverlay}
      />
      <div
        className={classNames([
          'absolute inset-y-0 overflow-y-auto overscroll-contain w-80 bg-base-100 text-base-content transition-transform duration-300',
          {
            '': active,
            '-translate-x-full': !active,
          },
        ])}
      >
        {children}
      </div>
    </div>
  )
}
```


## MSW

### MSWでMiddleware的なことをしたいが、型が複雑すぎて出来なかった

[https://github.com/mswjs/msw/issues/481#issuecomment-830926706](https://github.com/mswjs/msw/issues/481#issuecomment-830926706)

こちらのコメントにあるように高階関数を使えばExpressのMiddleware的なことが出来るみたいだけど、これをTypeScriptでやろうとすると型指定をどうすればいいかわからず実現出来なかった。


## その他

### MaterialIconを読み込む時は `display=swap` を指定しようという話。

[google-font-display | Next.js](https://nextjs.org/docs/messages/google-font-display)

GoogleのWEBフォントを読み込む際に、displayを設定していないと上のようなLint警告が出る。

display設定は `font-display` のこと。詳細は以下。

[font-display - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/font-display)

Lintでは `optional` か `swap` を推奨している。基本的には `optional` だが、アイコンのような代替フォントで表示したくないような物は `swap` を指定する。
