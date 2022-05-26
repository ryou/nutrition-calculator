import { useQuery } from 'react-query'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { QUERY_OPTION } from '../../config/queryOption'
import { FoodstuffRepository } from '../../repositories/FoodstuffRepository'
import { useCallback, useMemo } from 'react'

const fetchFoodstuff = async (keyword: string) => {
  const result = await FoodstuffRepository.search(keyword)

  if (result.isFailure()) {
    throw result.error
  }

  return result.value
}

export const useSearchFoodstuffs = (keyword: string) => {
  const queryKey = useMemo(
    () => [PRIMARY_QUERY_KEY.FOODSTUFFS, keyword],
    [keyword]
  )
  const queryFn = useCallback(() => fetchFoodstuff(keyword), [keyword])

  const { data, isError } = useQuery(queryKey, queryFn, QUERY_OPTION.FOODSTUFF)

  return {
    data,
    isError,
  }
}
