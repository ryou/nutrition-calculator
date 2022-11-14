export const noUndefinedInArray = <T>(
  value: (T | undefined)[]
): value is T[] => {
  return value.every((item) => item !== undefined)
}
