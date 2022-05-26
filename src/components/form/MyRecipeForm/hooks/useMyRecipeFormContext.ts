import { useFormContext } from 'react-hook-form'
import { MyRecipeFormSchema } from '../MyRecipeFormProvider'

export const useMyRecipeFormContext = () => {
  return useFormContext<MyRecipeFormSchema>()
}
