import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retryされるとテストが遅くなるので
      retry: false,
    },
  },
})

export const QueryClientProviderForTest = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
