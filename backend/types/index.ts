export type RecipeModelData = {
  name: string
  items: {
    foodstuffId: string
    amount: number
  }[]
}

export type RecipeModel = {
  id: string
  data: RecipeModelData
}
