import '@testing-library/jest-dom'
import { render, screen, waitFor } from '../../../libs/test/TestUtils'
import { setupServer } from 'msw/node'
import {
  MyRecipeFormProvider,
  MyRecipeFormSchema,
} from './MyRecipeFormProvider'
import {
  MyRecipeFormComponent,
  MyRecipeFormComponentTestId,
} from './MyRecipeFormComponent'
import { fireEvent } from '@testing-library/dom'
import { MOCK_API_URL } from '../../../libs/test/url'
import { rest } from 'msw'
import { ApiResponse } from '../../../../shared/types/ApiResponse'
import { getDummyFoodstuff } from '../../../libs/test/getDummyFoodstuff'
import { FoodstuffSearchResultComponentTestId } from './localComponents/FoodstuffSearchResultComponent'

const renderForm = ({
  defaultValue = {
    name: '',
    items: [],
  },
  onSubmit,
}: {
  defaultValue?: MyRecipeFormSchema
  onSubmit: jest.Mock
}) => {
  render(
    <MyRecipeFormProvider defaultValues={defaultValue}>
      <MyRecipeFormComponent topErrorMessage={''} onSubmit={onSubmit} />
    </MyRecipeFormProvider>
  )
}

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('名前が空で登録しようとした際にエラーとなる', async () => {
  const onSubmit = jest.fn()

  renderForm({ onSubmit })

  fireEvent.submit(screen.getByTestId(MyRecipeFormComponentTestId.SubmitButton))

  await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1))
  expect(onSubmit).not.toHaveBeenCalled()
  expect(
    screen.getByTestId<HTMLInputElement>(MyRecipeFormComponentTestId.InputName)
      .value
  ).toBe('')
})

test('名前に入力がある状態で登録しようとした際に正常終了する', async () => {
  const onSubmit = jest.fn()

  renderForm({ onSubmit })

  const inputValue = 'sample'
  fireEvent.change(screen.getByTestId(MyRecipeFormComponentTestId.InputName), {
    target: { value: inputValue },
  })

  fireEvent.submit(screen.getByTestId(MyRecipeFormComponentTestId.SubmitButton))

  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
  expect(onSubmit.mock.calls[0][0]).toEqual({
    name: inputValue,
    items: [],
  })
  expect(
    screen.getByTestId<HTMLInputElement>(MyRecipeFormComponentTestId.InputName)
      .value
  ).toBe(inputValue)
  expect(screen.queryAllByRole('alert')).toHaveLength(0)
})

test('食材を追加して登録した際に、食材データも反映されている', async () => {
  const onSubmit = jest.fn()

  renderForm({ onSubmit })

  const food01 = {
    ...getDummyFoodstuff(),
    id: 'food_01',
    name: 'food_01',
    unit: {
      amount: 100,
    },
  }
  server.use(
    rest.get(MOCK_API_URL.FOODSTUFFS, (req, res, ctx) => {
      const response: ApiResponse.GetFoodstuffs = [food01]

      return res(ctx.status(200), ctx.json(response))
    })
  )
  const inputName = 'sample'

  // TODO: ここらへんコードが長く何をやっているかわかりにくいのをなんとかしたい
  fireEvent.change(screen.getByTestId(MyRecipeFormComponentTestId.InputName), {
    target: { value: inputName },
  })

  fireEvent.submit(screen.getByTestId(MyRecipeFormComponentTestId.SearchForm))

  await waitFor(() =>
    screen.getByTestId(
      FoodstuffSearchResultComponentTestId.AddButton(food01.id)
    )
  )

  fireEvent.click(
    screen.getByTestId(
      FoodstuffSearchResultComponentTestId.AddButton(food01.id)
    )
  )

  await waitFor(() =>
    screen.getByTestId(MyRecipeFormComponentTestId.SubmitButton)
  )

  fireEvent.submit(screen.getByTestId(MyRecipeFormComponentTestId.SubmitButton))

  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
  expect(onSubmit.mock.calls[0][0]).toEqual({
    name: inputName,
    items: [
      {
        amount: `${food01.unit.amount}`,
        foodstuff: {
          id: food01.id,
          name: food01.name,
          unit: food01.unit,
        },
      },
    ],
  })
  expect(
    screen.getByTestId<HTMLInputElement>(MyRecipeFormComponentTestId.InputName)
      .value
  ).toBe(inputName)
  expect(screen.queryAllByRole('alert')).toHaveLength(0)
})

test('食材を削除して登録した際に、削除されたことが反映されている', async () => {
  const food01 = {
    ...getDummyFoodstuff(),
    id: 'food_01',
    name: 'food_01',
    unit: {
      amount: 100,
    },
  }
  server.use(
    rest.get(MOCK_API_URL.FOODSTUFFS, (req, res, ctx) => {
      const response: ApiResponse.GetFoodstuffs = [food01]

      return res(ctx.status(200), ctx.json(response))
    })
  )
  const inputName = 'sample'
  const onSubmit = jest.fn()

  renderForm({
    defaultValue: {
      name: inputName,
      items: [
        {
          amount: '100',
          foodstuffId: food01.id,
        },
      ],
    },
    onSubmit,
  })

  // TODO: ここらへんコードが長く何をやっているかわかりにくいのをなんとかしたい
  await waitFor(() =>
    screen.getByTestId(MyRecipeFormComponentTestId.DeleteButton(0))
  )

  fireEvent.click(
    screen.getByTestId(MyRecipeFormComponentTestId.DeleteButton(0))
  )

  fireEvent.submit(screen.getByTestId(MyRecipeFormComponentTestId.SubmitButton))

  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
  expect(onSubmit.mock.calls[0][0]).toEqual({
    name: inputName,
    items: [],
  })
  expect(
    screen.getByTestId<HTMLInputElement>(MyRecipeFormComponentTestId.InputName)
      .value
  ).toBe(inputName)
  expect(screen.queryAllByRole('alert')).toHaveLength(0)
})
