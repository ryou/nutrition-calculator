import { removeUndefinedFromArray } from './removeUndefinedFromArray'

describe('removeUndefinedFromArray', () => {
  test('配列からundefinedを除去したものを返却する', () => {
    const result = removeUndefinedFromArray([1, 2, 3, undefined])

    expect(result).toEqual([1, 2, 3])
  })
})
