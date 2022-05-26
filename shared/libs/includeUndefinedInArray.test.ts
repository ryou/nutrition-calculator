import { includeUndefinedInArray } from './includeUndefinedInArray'

describe('includeUndefinedInArray', () => {
  test('配列にundefinedが含まれる場合はtrueを返却', () => {
    const result = includeUndefinedInArray([1, 2, undefined])

    expect(result).toBeTruthy()
  })

  test('配列にundefinedが含まれない場合はfalseを返却', () => {
    const result = includeUndefinedInArray([1, 2])

    expect(result).toBeFalsy()
  })
})
