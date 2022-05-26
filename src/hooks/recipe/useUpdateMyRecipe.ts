import { useQueryClient } from 'react-query'
import { useCallback } from 'react'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { Result } from '../../../shared/types/Result'
import { HttpError } from '../../libs/errors/HttpError'
import { RecipeRepository } from '../../repositories/RecipeRepository'
import { RecipeData } from '../../types/recipe'

export const useUpdateMyRecipe: (
  id: string,
  params?: { invalidateOnSuccess?: boolean }
) => (data: RecipeData) => Promise<Result<void, HttpError>> = (
  id,
  { invalidateOnSuccess } = { invalidateOnSuccess: false }
) => {
  const queryClient = useQueryClient()
  return useCallback(
    async (data: RecipeData) => {
      const result = await RecipeRepository.update(id, data)

      if (result.isFailure()) {
        return result
      }

      if (invalidateOnSuccess) {
        await queryClient.invalidateQueries(PRIMARY_QUERY_KEY.MY_RECIPES)
      }

      return result
    },
    [id, invalidateOnSuccess, queryClient]
  )
}
