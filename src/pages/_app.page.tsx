import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'
import Link from 'next/link'
import { pagesPath } from '../.pathpida/$path'
import { useBackend } from '../hooks/useBackend'
import { QUERY_OPTION } from '../config/queryOption'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: QUERY_OPTION.DEFAULT,
  },
})

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={pagesPath.$url()}>
          <a className="text-xl font-bold mx-2">栄養計算器</a>
        </Link>
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { initialized } = useBackend()

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>栄養計算機</title>
      </Head>
      {initialized && (
        <>
          <NavBar />
          <div className="py-8">
            <div className="mx-auto max-w-3xl bg-base-100 p-4 sm:p-8 shadow-sm rounded-lg">
              <Component {...pageProps} />
            </div>
          </div>
        </>
      )}
    </QueryClientProvider>
  )
}

export default MyApp
