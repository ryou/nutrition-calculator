// asとか型の抜け道を使わずに (T | undefined)[] からundefinedを取り除いて T[] にする処理
export const removeUndefinedFromArray = <T>(array: (T | undefined)[]): T[] => {
  return array.flatMap((item) => (item === undefined ? [] : [item]))
}
