import { rest } from 'msw'
import { ApiResponse } from '../../shared/types/ApiResponse'
import { successResponse } from '../responses/SuccessResponse'
import { foodstuffRepository } from '../singletonFactory'
import * as z from 'zod'
import { badRequestResponse } from '../responses/ErrorResponse'

export const getFoodstuffResolver = (basePath: string) => {
  return [
    // TODO: path指定の各所に `${basePath}~` ってやってるの嫌なので共通化
    rest.get(`${basePath}/api/foodstuff`, async (req, res, ctx) => {
      const searchParamsSchema = z.object({
        keyword: z.string(),
      })
      const parsedParams = searchParamsSchema.safeParse({
        keyword: req.url.searchParams.get('keyword'),
      })
      if (!parsedParams.success) {
        return badRequestResponse(parsedParams.error)
      }
      const { keyword } = parsedParams.data

      const foodstuffs = await foodstuffRepository.search(keyword)

      return successResponse(foodstuffs, ApiResponse.getFoodstuffsSchema)
    }),

    rest.get(`${basePath}/api/foodstuff/:id`, async (req, res, ctx) => {
      const paramsSchema = z.object({
        id: z.string(),
      })
      const parsedParams = paramsSchema.safeParse(req.params)
      if (!parsedParams.success) {
        return badRequestResponse(parsedParams.error)
      }

      const { id } = parsedParams.data

      const foodstuff = await foodstuffRepository.find(id)

      if (foodstuff === undefined) {
        return res(ctx.delay(), ctx.status(404))
      }

      return successResponse(foodstuff, ApiResponse.getFoodstuffSchema)
    }),
  ]
}
