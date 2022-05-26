import { rest } from 'msw'
import { foodstuffRepository, myRecipeRepository } from '../singletonFactory'
import {
  badRequestResponse,
  notFoundResponse,
} from '../responses/ErrorResponse'
import { ApiResponse } from '../../shared/types/ApiResponse'
import { ApiRequestBody } from '../../shared/types/ApiRequestBody'
import { successResponse } from '../responses/SuccessResponse'
import { convertRecipeModelToGetMyRecipeResponse } from '../libs/convertRecipeModelToGetMyRecipeResponse'
import * as z from 'zod'

export const getMyRecipeResolver = (basePath: string) => {
  return [
    rest.get(`${basePath}/api/my_recipe`, async (req, res, ctx) => {
      const recipeModels = await myRecipeRepository.list()

      const responseBody: ApiResponse.GetMyRecipes = recipeModels.map(
        (recipeModel) => {
          return {
            id: recipeModel.id,
            name: recipeModel.data.name,
          }
        }
      )

      return successResponse(responseBody, ApiResponse.getMyRecipesSchema)
    }),

    rest.post(`${basePath}/api/my_recipe`, async (req, res, ctx) => {
      const parseResult = ApiRequestBody.postMyRecipeSchema.safeParse(req.body)

      if (!parseResult.success) {
        return badRequestResponse(parseResult.error)
      }

      const newId = await myRecipeRepository.add(parseResult.data)

      return successResponse({ id: newId }, ApiResponse.postMyRecipeSchema)
    }),

    rest.get(`${basePath}/api/my_recipe/:id`, async (req, res, ctx) => {
      const paramsSchema = z.object({
        id: z.string(),
      })
      const parsedParams = paramsSchema.safeParse(req.params)
      if (!parsedParams.success) {
        return badRequestResponse(parsedParams.error)
      }

      const { id } = parsedParams.data

      const recipeModel = await myRecipeRepository.find(id)

      if (recipeModel === undefined) {
        return notFoundResponse()
      }

      const convertResult = await convertRecipeModelToGetMyRecipeResponse(
        recipeModel,
        foodstuffRepository
      )

      if (convertResult.isFailure()) {
        return notFoundResponse()
      }

      return successResponse(convertResult.value, ApiResponse.getMyRecipeSchema)
    }),

    rest.put(`${basePath}/api/my_recipe/:id`, async (req, res, ctx) => {
      const paramsSchema = z.object({
        id: z.string(),
      })
      const parsedParams = paramsSchema.safeParse(req.params)
      if (!parsedParams.success) {
        return badRequestResponse(parsedParams.error)
      }

      const { id } = parsedParams.data

      const parsedBody = ApiRequestBody.updateMyRecipeSchema.safeParse(req.body)

      if (!parsedBody.success) {
        return badRequestResponse(parsedBody.error)
      }

      await myRecipeRepository.edit(id, parsedBody.data)

      return successResponse({}, ApiResponse.updateMyRecipeSchema)
    }),

    rest.delete(`${basePath}/api/my_recipe/:id`, async (req, res, ctx) => {
      const paramsSchema = z.object({
        id: z.string(),
      })
      const parsedParams = paramsSchema.safeParse(req.params)
      if (!parsedParams.success) {
        return badRequestResponse(parsedParams.error)
      }

      const { id } = parsedParams.data

      await myRecipeRepository.delete(id)

      return successResponse({}, ApiResponse.deleteMyRecipeSchema)
    }),
  ]
}
