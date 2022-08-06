import type { Query as Query0 } from '../pages/my_recipe/detail.page'

export const pagesPath = {
  "my_recipe": {
    "create": {
      $url: (url?: { hash?: string }) => ({ pathname: '/my_recipe/create' as const, hash: url?.hash })
    },
    "detail": {
      $url: (url: { query: Query0, hash?: string }) => ({ pathname: '/my_recipe/detail' as const, query: url.query, hash: url.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
