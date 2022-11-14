import { RecipeModel } from '../types'
import { ApiResponse } from '../../shared/types/ApiResponse'
import { IFoodstuffRepository } from '../repositories/FoodstuffRepository/IFoodstuffRepository'
import { Failure, Result, Success } from '../../shared/types/Result'
import { noUndefinedInArray } from '../../shared/libs/noUndefinedInArray'

export const convertRecipeModelToGetMyRecipeResponse = async (
  recipeModel: RecipeModel,
  foodstuffRepository: IFoodstuffRepository
): Promise<Result<ApiResponse.GetMyRecipe, Error>> => {
  const items = await Promise.all(
    recipeModel.data.items.map(async (item) => {
      // TODO: 一個一個findするのは非効率
      const foodstuff = await foodstuffRepository.find(item.foodstuffId)

      if (foodstuff === undefined) {
        return undefined
      }

      const { nutrition, ...foodstuffSummary } = foodstuff

      return {
        foodstuff: foodstuffSummary,
        amount: item.amount,
      }
    })
  )

  if (!noUndefinedInArray(items)) {
    return new Failure(new Error('データにない食材がしていされました。'))
  }

  return new Success({
    id: recipeModel.id,
    ...recipeModel.data,
    items,
  })
}
