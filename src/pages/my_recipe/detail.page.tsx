import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useFindMyRecipe } from '../../hooks/recipe/useFindMyRecipe'
import { pagesPath } from '../../.pathpida/$path'
import { useUpdateMyRecipe } from '../../hooks/recipe/useUpdateMyRecipe'
import { AlertComponent } from '../../components/abstract/Alert/AlertComponent'
import * as z from 'zod'
import { useQueryParameter } from '../../hooks/useQueryParameter'
import { MyRecipeFormComponent } from '../../components/form/MyRecipeForm/MyRecipeFormComponent'
import { MyRecipeFormProvider } from '../../components/form/MyRecipeForm/MyRecipeFormProvider'
import { useMyRecipeFormContext } from '../../components/form/MyRecipeForm/hooks/useMyRecipeFormContext'
import { useNetworkFormSubmit } from '../../components/form/hooks/useNetworkFormSubmit'
import { Recipe } from '../../types/recipe'
import { MainLayoutComponent } from '../../components/abstract/MainLayout/MainLayoutComponent'
import {
  convertMyRecipeFormSchemaToRecipeData,
  convertRecipeDataToMyRecipeFormSchema,
} from '../../components/form/MyRecipeForm/utils'

const FormContentComponent = ({ id }: { id: string }) => {
  const router = useRouter()
  const updateMyRecipe = useUpdateMyRecipe(id)
  const useFormReturn = useMyRecipeFormContext()
  const { topErrorMessage, onSubmit } = useNetworkFormSubmit({
    execFunc: (data) => {
      const convertResult = convertMyRecipeFormSchemaToRecipeData(data)

      if (convertResult.isFailure()) {
        // 事前にバリデーションしてるのでconvertに失敗することはないはずだが、
        // いちおうここに来たらエラーは投げておく
        throw convertResult.error
      }

      return updateMyRecipe(convertResult.value)
    },
    onSuccess: async () => {
      await router.push(pagesPath.my_recipe.$url())
    },
    useFormReturn,
  })

  return (
    <MyRecipeFormComponent
      topErrorMessage={topErrorMessage}
      onSubmit={onSubmit}
    />
  )
}

const OnRecipeReadyComponent = ({ recipe }: { recipe: Recipe }) => {
  return (
    <MyRecipeFormProvider
      defaultValues={convertRecipeDataToMyRecipeFormSchema(recipe)}
    >
      <FormContentComponent id={recipe.id} />
    </MyRecipeFormProvider>
  )
}

const OnQueryReadyComponent = ({ id }: { id: string }) => {
  const { data, isError } = useFindMyRecipe(id)

  return isError ? (
    <AlertComponent type={'error'}>データの取得に失敗しました。</AlertComponent>
  ) : data === undefined ? (
    <div />
  ) : (
    <OnRecipeReadyComponent recipe={data} />
  )
}

const querySchema = z.object({
  id: z.string(),
})

export type Query = z.infer<typeof querySchema>
const MyRecipeDetailPage: NextPage = () => {
  const { data, isError } = useQueryParameter(querySchema)

  return (
    <MainLayoutComponent titleContent={'Myレシピ詳細'}>
      {isError ? (
        <AlertComponent type={'error'}>エラー</AlertComponent>
      ) : data === undefined ? (
        <div />
      ) : (
        <OnQueryReadyComponent id={data.id} />
      )}
    </MainLayoutComponent>
  )
}

export default MyRecipeDetailPage
