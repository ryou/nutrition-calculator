import { useQueryClient } from 'react-query'
import { useCallback } from 'react'
import { PRIMARY_QUERY_KEY } from '../../config/queryKey'
import { Result } from '../../../shared/types/Result'
import { HttpError } from '../../libs/errors/HttpError'
import { RecipeRepository } from '../../repositories/RecipeRepository'
import { RecipeData } from '../../types/recipe'

type UseUpdateMyRecipe = () => (
  id: string,
  data: RecipeData
) => Promise<Result<void, HttpError>>
export const useUpdateMyRecipe: UseUpdateMyRecipe = () => {
  const queryClient = useQueryClient()

  return useCallback(
    async (id: string, data: RecipeData) => {
      const result = await RecipeRepository.update(id, data)

      if (result.isFailure()) {
        return result
      }

      await queryClient.invalidateQueries(PRIMARY_QUERY_KEY.MY_RECIPES)

      return result
    },
    [queryClient]
  )
}
