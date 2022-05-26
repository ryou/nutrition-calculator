import { renderHook } from '../../libs/test/TestUtils'
import { useFindFoodstuffs } from './useFindFoodstuff'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { MOCK_API_URL } from '../../libs/test/url'
import { getDummyFoodstuff } from '../../libs/test/getDummyFoodstuff'
import { waitFor } from '@testing-library/dom'

const server = setupServer()

beforeAll(() => server.listen())
beforeEach(() => {
  server.use(
    rest.get(MOCK_API_URL.FOODSTUFF, (req, res, ctx) => {
      const { id } = req.params

      if (id === 'error') {
        return res(ctx.status(404))
      }

      return res(ctx.status(200), ctx.json(makeDummyFoodstuff(id as string)))
    })
  )
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const makeDummyFoodstuff = (id: string) => {
  return {
    ...getDummyFoodstuff(),
    id: `food_${id}`,
  }
}

describe('useFindFoodstuffs', () => {
  test('指定したIDの食材データが配列でdataに入って返却される', async () => {
    const { result } = renderHook(() => useFindFoodstuffs(['1', '2']))

    await waitFor(() =>
      expect(result.current.data).toEqual([
        makeDummyFoodstuff('1'),
        makeDummyFoodstuff('2'),
      ])
    )
    expect(result.current.isError).toBeFalsy()
  })

  test('ひとつでも通信に失敗したらエラーになる', async () => {
    const { result } = renderHook(() => useFindFoodstuffs(['1', 'error']))

    await waitFor(() => expect(result.current.isError).toBeTruthy())
    expect(result.current.data).toBeUndefined()
  })
})
