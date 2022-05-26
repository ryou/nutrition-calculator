import { render, screen, waitFor } from '../../../libs/test/TestUtils'
import '@testing-library/jest-dom'
import { FoodstuffModalComponent } from './FoodstuffModalComponent'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { getDummyFoodstuff } from '../../../libs/test/getDummyFoodstuff'
import * as FoodstuffDetailComponent from '../FoodstuffDetail/FoodstuffDetailComponent'
import { MOCK_API_URL } from '../../../libs/test/url'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('取得した食品情報が表示される', async () => {
  const sampleFoodstuff = {
    ...getDummyFoodstuff(),
    id: 'sample',
  }

  server.use(
    rest.get(MOCK_API_URL.FOODSTUFF, (req, res, ctx) => {
      const { id } = req.params

      if (id === sampleFoodstuff.id) {
        return res(ctx.status(200), ctx.json(sampleFoodstuff))
      }

      return res(ctx.status(404))
    })
  )

  const onSuccessTestId = 'on_success'

  const spyFoodstuffDetailComponent = jest
    .spyOn(FoodstuffDetailComponent, 'FoodstuffDetailComponent')
    .mockReturnValue(<div data-testid={onSuccessTestId} />)

  const onClose = jest.fn()
  render(
    <FoodstuffModalComponent
      foodstuffId={sampleFoodstuff.id}
      onClose={onClose}
    />
  )

  await waitFor(() => screen.getByTestId(onSuccessTestId))

  expect(spyFoodstuffDetailComponent).toHaveBeenCalledWith(
    {
      foodstuff: sampleFoodstuff,
    },
    // TODO: 第二引数の指定が必要な理由を調べる
    {}
  )
})

test('通信エラー時にアラートが表示される', async () => {
  server.use(
    rest.get(MOCK_API_URL.FOODSTUFF, (req, res, ctx) => {
      return res(ctx.status(404))
    })
  )

  const onClose = jest.fn()
  render(<FoodstuffModalComponent foodstuffId={'no_data'} onClose={onClose} />)

  const errorElement = await screen.findByRole('alert')

  expect(errorElement).toBeInTheDocument()
})
