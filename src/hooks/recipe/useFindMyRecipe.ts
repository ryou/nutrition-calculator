import { useQuery } from 'react-query'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { QUERY_OPTION } from '../../config/queryOption'
import { RecipeRepository } from '../../repositories/RecipeRepository'
import { useCallback, useMemo } from 'react'

const findMyRecipe = async (id: string) => {
  const result = await RecipeRepository.find(id)

  if (result.isFailure()) {
    throw result.error
  }

  return result.value
}

export const useFindMyRecipe = (id: string) => {
  const queryKey = useMemo(() => [PRIMARY_QUERY_KEY.MY_RECIPE, id], [id])
  const queryFn = useCallback(() => findMyRecipe(id), [id])

  const { data, isError } = useQuery(queryKey, queryFn, QUERY_OPTION.MY_RECIPE)

  return {
    data,
    isError,
  }
}
