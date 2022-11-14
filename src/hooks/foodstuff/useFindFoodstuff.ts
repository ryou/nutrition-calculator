import { useQueries, useQuery } from 'react-query'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { QUERY_OPTION } from '../../config/queryOption'
import { FoodstuffRepository } from '../../repositories/FoodstuffRepository'
import { useCallback, useMemo } from 'react'
import { Foodstuff } from '../../types/foodstuff'
import { noUndefinedInArray } from '../../../shared/libs/noUndefinedInArray'

const findFoodstuff = async (id: string) => {
  const result = await FoodstuffRepository.find(id)

  if (result.isFailure()) {
    throw result.error
  }

  return result.value
}

export const useFindFoodstuff = (id: string) => {
  const queryKey = useMemo(() => [PRIMARY_QUERY_KEY.FOODSTUFF, id], [id])
  const queryFn = useCallback(() => findFoodstuff(id), [id])

  const { data, isError } = useQuery(queryKey, queryFn, QUERY_OPTION.FOODSTUFF)

  return {
    data,
    isError,
  }
}

export const useFindFoodstuffs = (
  ids: string[]
): {
  data: Foodstuff[] | undefined
  isError: boolean
} => {
  const queryOptions = useMemo(() => {
    return ids.map((id) => {
      return {
        queryKey: [PRIMARY_QUERY_KEY.FOODSTUFF, id],
        queryFn: () => findFoodstuff(id),
        ...QUERY_OPTION.FOODSTUFF,
      }
    })
  }, [ids])
  const queryResults = useQueries(queryOptions)

  const isError = queryResults.some((result) => result.isError)

  const data = useMemo(() => {
    const tmp = queryResults.map((result) => result.data)

    if (!noUndefinedInArray(tmp)) {
      return undefined
    }

    return tmp
  }, [queryResults])

  return {
    data,
    isError,
  }
}
