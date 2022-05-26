import { round } from './round'

describe('round', () => {
  test.each`
    num     | digit | expected
    ${12}   | ${1}  | ${10}
    ${12}   | ${0}  | ${12}
    ${0.12} | ${-1} | ${0.1}
  `('numが$num、digitが$digitの際は$expected', ({ num, digit, expected }) => {
    const result = round(num, digit)
    expect(result).toBe(expected)
  })
})
