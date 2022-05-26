/**
 * 文字列中の全角英数を半角英数に置き換える
 * @param text
 */
export const replaceFullWidthToHalfWidthAscii = (text: string): string => {
  return text.replace(/[！-～]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
}
