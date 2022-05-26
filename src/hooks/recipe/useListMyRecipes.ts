import { useQuery } from 'react-query'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { QUERY_OPTION } from '../../config/queryOption'
import { RecipeRepository } from '../../repositories/RecipeRepository'

const fetchMyRecipes = async () => {
  const result = await RecipeRepository.list()

  if (result.isFailure()) {
    throw result.error
  }

  return result.value
}

const queryKey = PRIMARY_QUERY_KEY.MY_RECIPES

export const useListMyRecipes = () => {
  const { data, isError } = useQuery(
    queryKey,
    fetchMyRecipes,
    QUERY_OPTION.MY_RECIPE
  )

  return {
    data,
    isError,
  }
}
