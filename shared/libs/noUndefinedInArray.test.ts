import { noUndefinedInArray } from './noUndefinedInArray'

describe('noUndefinedInArray', () => {
  test('配列にundefinedが含まれる場合はfalseを返却', () => {
    const result = noUndefinedInArray([1, 2, undefined])

    expect(result).toBeFalsy()
  })

  test('配列にundefinedが含まれない場合はtrueを返却', () => {
    const result = noUndefinedInArray([1, 2])

    expect(result).toBeTruthy()
  })
})
