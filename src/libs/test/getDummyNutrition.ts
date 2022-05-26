import { recordMap } from '../../../shared/libs/recordMap'
import { getEmptyNutrition } from '../../services/NutritionService'

export const getDummyNutrition = (nutritionValue: number) => {
  const nutrition = getEmptyNutrition()

  return recordMap(nutrition, (key, value) => nutritionValue)
}
