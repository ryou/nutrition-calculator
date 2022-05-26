/**
 * 任意のステータスコードの際の挙動を動作確認するための開発用モック
 * ブラウザのconsoleから叩きやすいように、全部getで作っている
 */
import { rest } from 'msw'

export const getMockStatusResolvers = (basePath: string) => {
  // この変数が非undefinedのとき、指定されたnumberのエラーのステータスコードを返却する
  let mockStatus: number | undefined = undefined

  return [
    rest.get(
      `${basePath}/for_dev/start_mock_status/:status`,
      (req, res, ctx) => {
        const { status } = req.params

        mockStatus = Number(status)

        return res(ctx.status(200))
      }
    ),

    rest.get(`${basePath}/for_dev/stop_mock_status`, (req, res, ctx) => {
      mockStatus = undefined

      return res(ctx.status(200))
    }),

    rest.all('*', (req, res, ctx) => {
      if (mockStatus !== undefined) {
        return res(ctx.delay(), ctx.status(mockStatus))
      }
    }),
  ]
}
