import * as z from 'zod'
import { ZodFormSchema } from '../../../libs/ZodFormSchema'
import { FormProvider } from 'react-hook-form'
import { useDefaultForm } from '../hooks/useDefaultForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { ApiRequestBody } from '../../../../shared/types/ApiRequestBody'

const myRecipeFormSchema = z.object({
  name: ZodFormSchema.getInputSchema({ required: true }),
  items: z.array(
    z.object({
      foodstuffId: z.string(),
      amount: ZodFormSchema.getNumberInputSchema({
        min: ApiRequestBody.RECIPE_FOODSTUFF_AMOUNT_MIN,
        max: ApiRequestBody.RECIPE_FOODSTUFF_AMOUNT_MAX,
      }),
    })
  ),
})

export type MyRecipeFormSchema = z.infer<typeof myRecipeFormSchema>

type Props = {
  defaultValues: MyRecipeFormSchema
  children: ReactNode
}
export const MyRecipeFormProvider = ({ defaultValues, children }: Props) => {
  const methods = useDefaultForm<MyRecipeFormSchema>(
    defaultValues,
    zodResolver(myRecipeFormSchema)
  )

  return <FormProvider {...methods}>{children}</FormProvider>
}
