import * as z from 'zod'

export namespace ApiRequestBody {
  export const RECIPE_FOODSTUFF_AMOUNT_MIN = 0
  export const RECIPE_FOODSTUFF_AMOUNT_MAX = 9999

  const recipeModelDataSchema = z.object({
    name: z.string().min(1),
    items: z.array(
      z.object({
        foodstuffId: z.string(),
        amount: z
          .number()
          .min(RECIPE_FOODSTUFF_AMOUNT_MIN)
          .max(RECIPE_FOODSTUFF_AMOUNT_MAX),
      })
    ),
  })

  export const postMyRecipeSchema = recipeModelDataSchema
  export type PostMyRecipe = z.infer<typeof postMyRecipeSchema>

  export const updateMyRecipeSchema = recipeModelDataSchema
  export type UpdateMyRecipe = z.infer<typeof updateMyRecipeSchema>
}
