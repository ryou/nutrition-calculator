export const includeUndefinedInArray = <T>(
  value: (T | undefined)[]
): value is (T | undefined)[] => {
  return value.some((item) => item === undefined)
}
