import { RecipeData } from '../../../types/recipe'
import { MyRecipeFormSchema } from './MyRecipeFormProvider'
import { castStringToNumber } from '../../../libs/castStringToNumber'
import { Failure, Result, Success } from '../../../../shared/types/Result'
import { noUndefinedInArray } from '../../../../shared/libs/noUndefinedInArray'

export const convertMyRecipeFormSchemaToRecipeData = (
  formData: MyRecipeFormSchema
): Result<RecipeData, Error> => {
  const items = formData.items.map((item) => {
    const castedAmountResult = castStringToNumber(item.amount)

    if (castedAmountResult.isFailure()) {
      return undefined
    }

    return {
      ...item,
      amount: castedAmountResult.value,
    }
  })

  if (!noUndefinedInArray(items)) {
    return new Failure(
      new Error('amountの文字列から数値の変換に失敗しました。')
    )
  }

  return new Success({
    ...formData,
    items,
  })
}

export const convertRecipeDataToMyRecipeFormSchema = (
  recipeData: RecipeData
): MyRecipeFormSchema => {
  return {
    ...recipeData,
    items: recipeData.items.map((item) => {
      return {
        foodstuffId: item.foodstuffId,
        amount: `${item.amount}`,
      }
    }),
  }
}
