import { Foodstuff } from '../../types/foodstuff'
import { getDummyNutrition } from './getDummyNutrition'

export const getDummyFoodstuff = (
  nutritionValue: number = 0
): Omit<Foodstuff, 'id'> => {
  return {
    name: '',
    subNames: [],
    unit: {
      amount: 100,
    },
    nutrition: getDummyNutrition(nutritionValue),
  }
}
