# 栄養計算機

[アプリ](https://ryou.github.io/nutrition-calculator/)

[Storybook](https://stately-souffle-c40976.netlify.app/)

## 概要

料理レシピから栄養を計算するツール。

栄養計算ツール[カロリーSlism](https://calorie.slism.jp/) で計算結果を保存できないのが辛いなと思って作った。


## 主な採用技術・ライブラリ

- Next.js
- TailwindCSS
  - DaisyUI
- ReactHookForm
- zod
- ReactQuery
- MockServiceWorker
- pathpida


## ディレクトリ

- src
  - フロントエンドの層
  - backendに依存してはいけない
  - sharedに依存してもいい
- backend
  - バックエンドの層
    - 実際はMockServiceWorker上で動作させるので、クライアントで動作するコードだが（後々実際にサーバー用意してそこに配置する予定）
  - frontendに依存してはいけない
  - sharedに依存してもいい
- shared
  - フロント/バック共通の物を配置する
    - APIの型とか
    - 文脈問わず使える汎用的な関数とか
  - frontend/backendに依存してはいけない

フロントエンドとバックエンドを疎結合にするために上のルールで実装。フロントエンドのディレクトリ名はsrcではなくfrontendという名前にしたかったが、 `frontend/pages` をpagesディレクトリとして認識させる方法がわからなかったので断念。

また、依存のルールに関しては以下のESLintプラグインを使用してLintするようにしている。

[knowledge-work/eslint-plugin-strict-dependencies: ESlint plugin to define custom module dependency rules.](https://github.com/knowledge-work/eslint-plugin-strict-dependencies)

参考：[React+TSプロジェクトで便利だったLint/Format設定紹介](https://zenn.dev/yoshiko/articles/0994f518015c04)


## コンポーネントの分類

- abstract
  - 汎用性の高いコンポーネント
    - 例：TextInput/Modal
- concrete
  - 汎用性の低い狭い用途の為に作られたコンポーネント
    - 例：AmountInput/FoodstuffModal
- form
  - 各種フォームコンポーネント
    - 例：LoginForm/UserProfileForm
- headless
  - 見た目の無い振る舞いを与えるためのコンポーネント
    - 例：Portalとか

複雑な分類をする動機が無いので、分類は上記4種類のシンプルな分類にしている。

また、コンポーネントの命名は `~Component` とするようにしている。型の名前と被りにくくするための規則。名前が長くなるので悩んだが、被った時に命名に悩みまくるのが嫌なので被りにくくなる方向に倒した。


## APIレスポンスの型に関して

APIレスポンスの型に関しては、多少冗長になろうがzodで定義する。

理由は、バックエンドが返すレスポンスに余計なプロパティが混ざらないようにするため。

zodのparseメソッドで余剰プロパティの除去が出来るので、レスポンスでparseをかませて送ってはいけない余計なプロパティが混ざらないようにするのが主目的。

## 文字列から数値へのキャストに関して

文字列から数値へのキャストでよくあるNaNの考慮漏れや、是非を考えず空文字を0として扱ってしまうことを防ぐためにResult型を返す `src/libs/castStringToNumber` 関数を用意しているのでそちらを使用するようにすること。

この関数の使用を強制するために、 `eslint-plugin-ban` を利用して `parseInt` と `Number` の使用を禁止している。（他の方法でのキャストは禁止できていないので注意 ex: `+str`等）

## React Query

ReactQueryによるキャッシュは以下の方針で行う。（ `src/config/queryOption.ts` で管理）

### Foodstuff

食材データは以下の特徴がある。

- ユーザーはデータの取得しか出来ず、変更は出来ない。
- 取得が頻繁に行われる。
  - 特にレシピ栄養計算時に、レシピに使用している各食材の詳細データを取得している。
- 更新がかなり少ない。

よって、一度取得したデータはそれなりの時間はそのまま使用していても問題ないと考える。

このことから設定は

- refetch系を全てoff
- cacheTimeは1時間

とする。

### MyRecipe

Myレシピデータは以下の特徴が有る。

- ユーザーがデータの変更をする。
- 取得によるAPIの負荷は少なめ。
  - 食材データのように、キャッシュしないことで頻繁に大量の取得が行われるようになることはない。

よって、基本的にデータをキャッシュせず、常に最新のデータを使用するようにする。

このことから設定は、

- refetchOnMountのみonにする
- staleとcacheは200ミリ秒に設定
  - MyRecipeに対するuseQueryが同時に発生した際のリクエストを減らせるので。
- invalidateOnSuccessのようなフラグを用意し、それがonなら処理終了時にinvalidateするようにする。
  - 一覧画面上で削除とかする場合、このフラグが無いと画面が更新されないので。

とする。
