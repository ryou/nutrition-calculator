import { RecipeModel } from '../types'
import { InMemoryFoodstuffRepository } from '../repositories/FoodstuffRepository/InMemoryFoodstuffRepository'
import { emptyNutrition } from './emptyNutrition'
import { convertRecipeModelToGetMyRecipeResponse } from './convertRecipeModelToGetMyRecipeResponse'
import { Failure, Success } from '../../shared/types/Result'
import { ApiResponse } from '../../shared/types/ApiResponse'

describe('convertRecipeModelToGetMyRecipeResponse', () => {
  test('foodstuffIdを元にJoinされたデータが返却される', async () => {
    const recipeModel: RecipeModel = {
      id: 'recipe_01',
      data: {
        name: 'サンプルレシピ',
        items: [
          {
            foodstuffId: 'food_01',
            amount: 100,
          },
          {
            foodstuffId: 'food_02',
            amount: 200,
          },
        ],
      },
    }
    const foodstuffRepository = new InMemoryFoodstuffRepository([
      {
        id: 'food_01',
        name: 'フード01',
        subNames: [],
        unit: {
          amount: 100,
        },
        nutrition: { ...emptyNutrition },
      },
      {
        id: 'food_02',
        name: 'フード02',
        subNames: [],
        unit: {
          amount: 200,
        },
        nutrition: { ...emptyNutrition },
      },
    ])

    const result = await convertRecipeModelToGetMyRecipeResponse(
      recipeModel,
      foodstuffRepository
    )

    const expected: Success<ApiResponse.GetMyRecipe> = new Success({
      id: 'recipe_01',
      name: 'サンプルレシピ',
      items: [
        {
          foodstuff: {
            id: 'food_01',
            name: 'フード01',
            subNames: [],
            unit: {
              amount: 100,
            },
          },
          amount: 100,
        },
        {
          foodstuff: {
            id: 'food_02',
            name: 'フード02',
            subNames: [],
            unit: {
              amount: 200,
            },
          },
          amount: 200,
        },
      ],
    })

    expect(result).toEqual(expected)
  })

  test('存在しないfoodstuffIdが含まれる際はFailureが返却される', async () => {
    const recipeModel: RecipeModel = {
      id: 'recipe_01',
      data: {
        name: 'サンプルレシピ',
        items: [
          {
            foodstuffId: 'food_01',
            amount: 100,
          },
        ],
      },
    }
    const foodstuffRepository = new InMemoryFoodstuffRepository([])

    const result = await convertRecipeModelToGetMyRecipeResponse(
      recipeModel,
      foodstuffRepository
    )

    expect(result).toBeInstanceOf(Failure)
  })
})
