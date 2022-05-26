export const recordMap = <T extends string | number | symbol, K, L>(
  record: Record<T, K>,
  callback: (key: T, value: K) => L
): Record<T, L> => {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => {
      return [key, callback(key as T, value as K)]
    })
  ) as Record<T, L>
}
