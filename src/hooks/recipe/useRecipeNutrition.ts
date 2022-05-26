import { useFindFoodstuffs } from '../foodstuff/useFindFoodstuff'
import { useMemo } from 'react'
import { Nutrition } from '../../types/foodstuff'
import { calcTotalNutrition } from '../../services/NutritionService'

export const useRecipeNutrition = (
  foodstuffs: { foodstuffId: string; amount: number }[]
): { data: Nutrition | undefined; isError: boolean } => {
  const ids = useMemo(() => {
    return foodstuffs.map((foodstuff) => foodstuff.foodstuffId)
  }, [foodstuffs])

  const { data: foodstuffDetails, isError } = useFindFoodstuffs(ids)

  const data = useMemo(() => {
    if (foodstuffDetails === undefined) return undefined

    const recipeItems = foodstuffs.map(({ foodstuffId, amount }) => {
      const foodstuff = foodstuffDetails.find(
        (foodstuff) => foodstuff.id === foodstuffId
      )

      if (foodstuff === undefined) {
        throw new Error(`${foodstuffId} が見つかりませんでした。`)
      }

      return {
        foodstuff,
        amount,
      }
    })

    return calcTotalNutrition(recipeItems)
  }, [foodstuffDetails, foodstuffs])

  return {
    data,
    isError,
  }
}
