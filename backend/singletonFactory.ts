import { IndexedDBRecipeRepository } from './repositories/RecipeRepository/IndexedDBRecipeRepository'
import { InMemoryFoodstuffRepository } from './repositories/FoodstuffRepository/InMemoryFoodstuffRepository'
import { foodstuffList } from './repositories/FoodstuffRepository/data/foodstuffList'

export const myRecipeRepository = new IndexedDBRecipeRepository()

export const foodstuffRepository = new InMemoryFoodstuffRepository(
  foodstuffList
)
