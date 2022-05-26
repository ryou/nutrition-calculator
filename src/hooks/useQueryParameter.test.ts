import { renderHook } from '../libs/test/TestUtils'
import { waitFor } from '@testing-library/dom'
import { useQueryParameter } from './useQueryParameter'
import * as z from 'zod'
import { useRouter } from 'next/router'

jest.mock('next/router')

const mockUseRouter = (useRouterReturnValue: any) => {
  const mockUseRouter = useRouter as jest.Mock
  mockUseRouter.mockReturnValue({ ...useRouterReturnValue })
}

const querySchema = z.object({
  keyword: z.string(),
})

beforeEach(() => {
  jest.clearAllMocks()
})

test('ルーターの準備がまだ出来ていない際は、dataがundefinedとなる', async () => {
  mockUseRouter({
    isReady: false,
    query: {
      keyword: 'sample',
    },
  })

  const { result } = renderHook(() => useQueryParameter(querySchema))

  await waitFor(() => expect(result.current.data).toBeUndefined())
  expect(result.current.isError).toBeFalsy()
})

test('必要なクエリが指定されていれば、dataにその値が入った状態になる', async () => {
  mockUseRouter({
    isReady: true,
    query: {
      keyword: 'sample',
    },
  })

  const { result } = renderHook(() => useQueryParameter(querySchema))

  await waitFor(() =>
    expect(result.current.data).toEqual({
      keyword: 'sample',
    })
  )
  expect(result.current.isError).toBeFalsy()
})

test('必要なクエリが指定されていない際にエラーとなる', async () => {
  mockUseRouter({
    isReady: true,
    query: {},
  })

  const { result } = renderHook(() => useQueryParameter(querySchema))

  await waitFor(() => expect(result.current.isError).toBeTruthy())
  expect(result.current.data).toBeUndefined()
})
