import { Failure, Result, Success } from '../../shared/types/Result'
import { replaceFullWidthToHalfWidthAscii } from '../../shared/libs/replaceFullWidthToHalfWidthAscii'

/**
 * 文字列を数値にキャストする
 * キャストはかなり厳格なルールで行う（数値以外を含んでいる、または空文字だと失敗。全角数字はOK）
 * 'ほげ180' => 失敗
 * '180ほげ' => 失敗
 * '' => 失敗
 * '180' => 成功
 * @param text
 */
export const castStringToNumber = (text: string): Result<number, Error> => {
  const convertedText = replaceFullWidthToHalfWidthAscii(text)

  if (convertedText.length <= 0) {
    return new Failure(new Error('空文字列は数値に変換できません。'))
  }

  // Numberの使用禁止ルールは、このcastStringToNumber関数の使用を促すためなので、この関数内での使用はOKとする
  // eslint-disable-next-line ban/ban
  const casted = Number(convertedText)

  if (isNaN(casted)) {
    return new Failure(
      new Error(`文字列${text}を数値に変換した結果NaNになりました。`)
    )
  }

  return new Success(casted)
}
