import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { MOCK_API_URL } from '../../libs/test/url'
import { getDummyFoodstuff } from '../../libs/test/getDummyFoodstuff'
import { renderHook } from '../../libs/test/TestUtils'
import { waitFor } from '@testing-library/dom'
import { useRecipeNutrition } from './useRecipeNutrition'
import { recordMap } from '../../../shared/libs/recordMap'
import { castStringToNumber } from '../../libs/castStringToNumber'
import { getEmptyNutrition } from '../../services/NutritionService'

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
  const castResult = castStringToNumber(id)

  if (castResult.isFailure()) throw castResult.error

  return {
    ...getDummyFoodstuff(castResult.value),
    id,
  }
}

test('指定した食材の栄養総計が返却される', async () => {
  const { result } = renderHook(() =>
    useRecipeNutrition([
      {
        foodstuffId: '1',
        amount: 100,
      },
      {
        foodstuffId: '2',
        amount: 200,
      },
      {
        foodstuffId: '3',
        amount: 100,
      },
    ])
  )

  const expectedNutrition = recordMap(
    getEmptyNutrition(),
    (key, value) => 1 * 100 + 2 * 200 + 3 * 100
  )

  await waitFor(() => expect(result.current.data).not.toBeUndefined())
  expect(result.current.data).toEqual(expectedNutrition)
})

test('存在しない食材が含まれている際、エラーとなる', async () => {
  const { result } = renderHook(() =>
    useRecipeNutrition([
      {
        foodstuffId: '1',
        amount: 100,
      },
      {
        foodstuffId: 'error',
        amount: 200,
      },
    ])
  )

  await waitFor(() => expect(result.current.isError).toBeTruthy())
  expect(result.current.data).toBeUndefined()
})
