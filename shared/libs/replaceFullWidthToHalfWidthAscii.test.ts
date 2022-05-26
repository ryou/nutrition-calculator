import { replaceFullWidthToHalfWidthAscii } from './replaceFullWidthToHalfWidthAscii'

test.each`
  text            | expected
  ${'１２３後方'} | ${'123後方'}
  ${'前方１２３'} | ${'前方123'}
  ${'ＡＢＣ'}     | ${'ABC'}
  ${'ａｂｃ'}     | ${'abc'}
  ${''}           | ${''}
`('「$text」は「$expected」に変換される', ({ text, expected }) => {
  const result = replaceFullWidthToHalfWidthAscii(text)

  expect(result).toBe(expected)
})

test('制御文字以外のすべてのASCIIコードの文字が半角に変換される', () => {
  const zenkaku =
    '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～'
  const hankaku =
    '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'

  const result = replaceFullWidthToHalfWidthAscii(zenkaku)

  expect(result).toBe(hankaku)
})
