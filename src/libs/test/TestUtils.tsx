import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retryされるとテストが遅くなるので
      retry: false,
    },
  },
})

// TODO: anyやめる
const wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

// TODO: Portalを利用しているコンポーネントのテスト、このやり方でいい？
const getContainer = () => {
  const rootElement = document.createElement('div')
  rootElement.id = 'root'

  return document.body.appendChild(rootElement)
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper' | 'container'>
) =>
  render(ui, {
    wrapper,
    container: getContainer(),
    ...options,
  })

const customRenderHook: typeof renderHook = (renderer, options) =>
  renderHook(renderer, {
    wrapper,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
export { customRenderHook as renderHook }
