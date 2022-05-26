import { context, response } from 'msw'
import { ZodError } from 'zod'

export const badRequestResponse = (error: ZodError) => {
  const body = error.issues.reduce<Record<string, string[]>>(
    (prev, current) => {
      const path = current.path.join('.')
      const message = current.message

      return {
        ...prev,
        [path]: [message],
      }
    },
    {}
  )

  return response(context.status(400), context.json(body))
}

export const notFoundResponse = () => {
  return response(context.status(404))
}
