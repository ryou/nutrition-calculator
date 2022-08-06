import { useCallback } from 'react'
import { useQueryClient } from 'react-query'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { Result } from '../../../shared/types/Result'
import { HttpError } from '../../libs/errors/HttpError'
import { RecipeRepository } from '../../repositories/RecipeRepository'

export const useDeleteMyRecipe: (params?: {
  invalidateOnSuccess?: boolean
}) => (id: string) => Promise<Result<void, HttpError>> = (
  { invalidateOnSuccess } = { invalidateOnSuccess: false }
) => {
  const queryClient = useQueryClient()
  return useCallback(
    async (id: string) => {
      const result = await RecipeRepository.delete(id)

      if (result.isFailure()) {
        return result
      }

      if (invalidateOnSuccess) {
        await queryClient.invalidateQueries(PRIMARY_QUERY_KEY.MY_RECIPES)
      }

      return result
    },
    [invalidateOnSuccess, queryClient]
  )
}
