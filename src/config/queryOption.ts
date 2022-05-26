export const QUERY_OPTION = {
  DEFAULT: {
    staleTime: 1000,
    cacheTime: 1000,
    retry: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  },
  FOODSTUFF: {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnMount: false,
  },
  MY_RECIPE: {
    staleTime: 200,
    cacheTime: 200,
    refetchOnMount: true,
  },
}
