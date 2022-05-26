import { useQueryClient } from 'react-query'
import { useCallback } from 'react'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { Result, Success } from '../../../shared/types/Result'
import { HttpError } from '../../libs/errors/HttpError'
import { RecipeRepository } from '../../repositories/RecipeRepository'
import { RecipeData } from '../../types/recipe'

export const useAddMyRecipe: (params?: {
  invalidateOnSuccess?: boolean
}) => (data: RecipeData) => Promise<Result<string, HttpError>> = (
  { invalidateOnSuccess } = { invalidateOnSuccess: false }
) => {
  const queryClient = useQueryClient()

  return useCallback(
    async (data: RecipeData) => {
      const result = await RecipeRepository.add(data)

      if (result.isFailure()) {
        return result
      }

      if (invalidateOnSuccess) {
        await queryClient.invalidateQueries(PRIMARY_QUERY_KEY.MY_RECIPES)
      }

      return new Success(result.value.id)
    },
    [invalidateOnSuccess, queryClient]
  )
}
