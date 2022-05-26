/**
 * numを任意の桁で四捨五入する
 * @param num
 * @param digit
 */
export const round = (num: number, digit: number) => {
  const tmp = Math.pow(10, -digit)

  return Math.round(num * tmp) / tmp
}
