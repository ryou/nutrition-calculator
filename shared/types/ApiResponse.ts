import * as z from 'zod'

export namespace ApiResponse {
  const nutritionSchema = z.object({
    energy_kcal: z.number(),
    protein: z.number(),
    fat: z.number(),
    carbohydrate: z.number(),
    vitamin_a: z.number(),
    vitamin_d: z.number(),
    vitamin_e: z.number(),
    vitamin_k: z.number(),
    vitamin_b1: z.number(),
    vitamin_b2: z.number(),
    vitamin_b6: z.number(),
    vitamin_b12: z.number(),
    vitamin_c: z.number(),
    k: z.number(),
    ca: z.number(),
    mg: z.number(),
    phosphorus: z.number(),
    iron: z.number(),
    zn: z.number(),
    copper: z.number(),
    mn: z.number(),
    salt: z.number(),
  })
  const foodstuffSummarySchema = z.object({
    id: z.string(),
    name: z.string(),
    subNames: z.array(z.string()),
    unit: z.object({
      text: z.string().optional(),
      amount: z.number(),
    }),
  })
  const foodstuffSchema = foodstuffSummarySchema.merge(
    z.object({
      nutrition: nutritionSchema,
    })
  )
  const recipeSchema = z.object({
    id: z.string(),
    name: z.string(),
    items: z.array(
      z.object({
        foodstuffId: z.string(),
        amount: z.number(),
      })
    ),
  })
  const recipeSummarySchema = z.object({
    id: z.string(),
    name: z.string(),
  })

  export const getFoodstuffsSchema = z.array(foodstuffSummarySchema)
  export type GetFoodstuffs = z.infer<typeof getFoodstuffsSchema>

  export const getFoodstuffSchema = foodstuffSchema
  export type GetFoodstuff = z.infer<typeof getFoodstuffSchema>

  export const getMyRecipesSchema = z.array(recipeSummarySchema)
  export type GetMyRecipes = z.infer<typeof getMyRecipesSchema>

  export const getMyRecipeSchema = recipeSchema
  export type GetMyRecipe = z.infer<typeof getMyRecipeSchema>

  export const postMyRecipeSchema = z.object({
    id: z.string(),
  })
  export type PostMyRecipe = z.infer<typeof postMyRecipeSchema>

  export const updateMyRecipeSchema = z.object({})
  export type UpdateMyRecipe = z.infer<typeof updateMyRecipeSchema>

  export const deleteMyRecipeSchema = z.object({})
  export type DeleteMyRecipe = z.infer<typeof deleteMyRecipeSchema>
}
