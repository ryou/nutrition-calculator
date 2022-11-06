export const pagesPath = {
  "my_recipe": {
    "create": {
      $url: (url?: { hash?: string }) => ({ pathname: '/my_recipe/create' as const, hash: url?.hash })
    },
    "detail": {
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/my_recipe/detail/[id]' as const, query: { id }, hash: url?.hash })
      })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
