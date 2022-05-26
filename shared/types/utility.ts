/**
 * 一部のプロパティのみPartial/RequiredにするPartiallyPartial/PartiallyRequired
 * 参考：https://qiita.com/aqua_ix/items/b3a9b920781d833cede8
 */
export type PartiallyPartial<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>
