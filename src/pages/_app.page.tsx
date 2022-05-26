import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'
import { IconComponent } from '../components/abstract/Icon/IconComponent'
import { ReactNode, useCallback } from 'react'
import Link from 'next/link'
import { ButtonComponent } from '../components/abstract/Button/ButtonComponent'
import { pagesPath } from '../.pathpida/$path'
import {
  DrawerComponent,
  useDrawer,
} from '../components/abstract/Drawer/DrawerComponent'
import { useBackend } from '../hooks/useBackend'
import { QUERY_OPTION } from '../config/queryOption'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: QUERY_OPTION.DEFAULT,
  },
})

const NavBar = ({ onClickMenu }: { onClickMenu: () => void }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <ButtonComponent shape={'square'} color={'ghost'} onClick={onClickMenu}>
          <IconComponent size={'2xl'} icon={'menu'} />
        </ButtonComponent>
      </div>
      <div className="flex-1">
        <Link href={pagesPath.$url()}>
          <a className="text-xl font-bold mx-2">栄養計算器</a>
        </Link>
      </div>
    </div>
  )
}

// TODO: 命名再考
const NavComponent = () => {
  const drawer = useDrawer()

  const DrawerLink = useCallback(
    ({
      children,
      href,
    }: {
      children: ReactNode
      href: { hash: string | undefined; pathname: string }
    }) => {
      return (
        <Link href={href}>
          <a onClick={drawer.hide}>{children}</a>
        </Link>
      )
    },
    [drawer.hide]
  )

  return (
    <>
      <NavBar onClickMenu={drawer.show} />
      <DrawerComponent active={drawer.active} onClickOverlay={drawer.hide}>
        <ul className="menu p-4">
          <li>
            <DrawerLink href={pagesPath.$url()}>Top</DrawerLink>
          </li>
          <li className="menu-title">
            <span>Myレシピ</span>
          </li>
          <li>
            <DrawerLink href={pagesPath.my_recipe.$url()}>
              Myレシピ一覧
            </DrawerLink>
          </li>
          <li>
            <DrawerLink href={pagesPath.my_recipe.create.$url()}>
              Myレシピ作成
            </DrawerLink>
          </li>
        </ul>
      </DrawerComponent>
    </>
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
          <NavComponent />
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
