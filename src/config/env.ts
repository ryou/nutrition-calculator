import * as z from 'zod'

const nodeEnvSchema = z.union([
  z.literal('development'),
  z.literal('production'),
  z.literal('test'),
])
export const ENVIRONMENT = nodeEnvSchema.parse(process.env.NODE_ENV)

const basePathSchema = z.string()
export const BASE_PATH = basePathSchema.parse(process.env.NEXT_PUBLIC_BASE_PATH)
