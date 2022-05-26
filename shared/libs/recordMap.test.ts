import { recordMap } from './recordMap'

describe('recordMap', () => {
  test('各valueに対して、第二引数に指定された処理が適用される(valueが数値パターン)', () => {
    type Key = 'a' | 'b' | 'c'
    const record: Record<Key, number> = {
      a: 10,
      b: 100,
      c: 1000,
    }
    const result = recordMap(record, (key, value) => value * 10)

    expect(result).toEqual({
      a: 100,
      b: 1000,
      c: 10000,
    })
  })

  test('各valueに対して、第二引数に指定された処理が適用される(valueが配列パターン)', () => {
    type Key = 'a' | 'b' | 'c'
    const record: Record<Key, number[]> = {
      a: [1],
      b: [1, 2, 3],
      c: [1, 2],
    }
    const result = recordMap(record, (key, value) => value.length)

    expect(result).toEqual({
      a: 1,
      b: 3,
      c: 2,
    })
  })
})
