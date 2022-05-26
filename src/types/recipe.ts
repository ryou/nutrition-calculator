import { FoodstuffSummary } from './foodstuff'

export type RecipeItem = {
  foodstuff: FoodstuffSummary
  amount: number
}

export type RecipeData = {
  name: string
  items: RecipeItem[]
}

export type Recipe = {
  id: string
} & RecipeData

export type RecipeSummary = {
  id: string
  name: string
}
