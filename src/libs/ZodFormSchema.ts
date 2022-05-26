import { z } from 'zod'
import { castStringToNumber } from './castStringToNumber'

export const ZodFormSchema = {
  getInputSchema: (
    options: {
      minLength?: number
      maxLength?: number
      required?: boolean
    } = {}
  ) => {
    return z.string().superRefine((val, ctx) => {
      if (options.required === true && val === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `必須項目です。`,
        })
      }

      if (options.minLength !== undefined && val.length < options.minLength) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${options.minLength}文字以上入力して下さい。`,
        })
      }

      if (options.maxLength !== undefined && val.length > options.maxLength) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${options.maxLength}文字以下で入力して下さい。`,
        })
      }
    })
  },
  getNumberInputSchema: (
    options: {
      min?: number
      max?: number
    } = {}
  ) => {
    return z.string().superRefine((val, ctx) => {
      const castedValueResult = castStringToNumber(val)

      if (castedValueResult.isFailure()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `数値を入力して下さい。`,
        })

        // NaNだと後続の処理が正常にされないので、ここでreturn
        return
      }

      const num = castedValueResult.value

      if (options.min !== undefined && num < options.min) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${options.min}以上である必要があります。`,
        })
      }

      if (options.max !== undefined && options.max < num) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${options.max}以下である必要があります。`,
        })
      }
    })
  },
  getCheckBoxSchema: (
    options: {
      required?: boolean
    } = {}
  ) => {
    return z.boolean().superRefine((val, ctx) => {
      if (options.required === true && val === false) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `チェックが必須です。`,
        })
      }
    })
  },
}
