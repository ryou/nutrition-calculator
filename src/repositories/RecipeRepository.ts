import { httpRequest } from '../libs/httpRequest'
import { Success } from '../../shared/types/Result'
import { API_URL } from '../config/url'
import { ApiResponse } from '../../shared/types/ApiResponse'
import { ApiRequestBody } from '../../shared/types/ApiRequestBody'
import { HttpResult } from '../types'
import { RecipeData } from '../types/recipe'

const convertRecipeDataForApi = (data: RecipeData) => {
  return {
    name: data.name,
    items: data.items.map((item) => {
      return {
        foodstuffId: item.foodstuff.id,
        amount: item.amount,
      }
    }),
  }
}

export const RecipeRepository = {
  async list(): Promise<HttpResult<ApiResponse.GetMyRecipes>> {
    const result = await httpRequest({
      method: 'get',
      url: API_URL.getMyRecipesUrl(),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(ApiResponse.getMyRecipesSchema.parse(result.value))
  },

  async find(id: string): Promise<HttpResult<ApiResponse.GetMyRecipe>> {
    const result = await httpRequest({
      method: 'get',
      url: API_URL.getMyRecipeUrl(id),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(ApiResponse.getMyRecipeSchema.parse(result.value))
  },

  async add(data: RecipeData): Promise<HttpResult<ApiResponse.PostMyRecipe>> {
    const result = await httpRequest<ApiRequestBody.PostMyRecipe>({
      method: 'post',
      url: API_URL.getMyRecipesUrl(),
      data: convertRecipeDataForApi(data),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(ApiResponse.postMyRecipeSchema.parse(result.value))
  },

  async update(id: string, data: RecipeData): Promise<HttpResult<void>> {
    const result = await httpRequest<ApiRequestBody.UpdateMyRecipe>({
      method: 'put',
      url: API_URL.getMyRecipeUrl(id),
      data: convertRecipeDataForApi(data),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(undefined)
  },

  async delete(id: string): Promise<HttpResult<void>> {
    const result = await httpRequest({
      method: 'delete',
      url: API_URL.getMyRecipeUrl(id),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(undefined)
  },
}
