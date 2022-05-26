import { castStringToNumber } from './castStringToNumber'

// 成功パターン
test.each`
  text        | expected
  ${'180'}    | ${180}
  ${'+180'}   | ${+180}
  ${'-180'}   | ${-180}
  ${'１８０'} | ${180}
  ${'０'}     | ${0}
  ${'－１'}   | ${-1}
  ${'＋１'}   | ${+1}
`(
  '文字列「$text」のキャストは成功し、変換結果は「$expected」',
  ({ text, expected }) => {
    const result = castStringToNumber(text)

    if (result.isFailure()) throw new Error()
    expect(result.value).toBe(expected)
  }
)

// 失敗パターン
test.each`
  text
  ${''}
  ${'なんかしらの日本語'}
  ${'前方パターン180'}
  ${'180後方'}
  ${'180ab'}
  ${'ab180'}
  ${'¥180'}
`('文字列「$text」のキャストは失敗する。', ({ text }) => {
  const result = castStringToNumber(text)

  expect(result.isFailure()).toBeTruthy()
})
