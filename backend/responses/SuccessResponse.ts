import { context } from 'msw'
import { ZodSchema } from 'zod'
import { delayedResponse } from './delayedResponse'

export const successResponse = <T>(data: T, schema: ZodSchema<T>) => {
  // 余剰プロパティを除去するためにparse
  const parsedData = schema.parse(data)

  return delayedResponse(context.status(200), context.json(parsedData))
}
