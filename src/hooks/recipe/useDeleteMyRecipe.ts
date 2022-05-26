import { useCallback } from 'react'
import { useQueryClient } from 'react-query'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { Result } from '../../../shared/types/Result'
import { HttpError } from '../../libs/errors/HttpError'
import { RecipeRepository } from '../../repositories/RecipeRepository'

export const useDeleteMyRecipe: (
  id: string,
  params?: { invalidateOnSuccess?: boolean }
) => () => Promise<Result<void, HttpError>> = (
  id,
  { invalidateOnSuccess } = { invalidateOnSuccess: false }
) => {
  const queryClient = useQueryClient()
  return useCallback(async () => {
    const result = await RecipeRepository.delete(id)

    if (result.isFailure()) {
      return result
    }

    if (invalidateOnSuccess) {
      await queryClient.invalidateQueries(PRIMARY_QUERY_KEY.MY_RECIPES)
    }

    return result
  }, [id, invalidateOnSuccess, queryClient])
}
