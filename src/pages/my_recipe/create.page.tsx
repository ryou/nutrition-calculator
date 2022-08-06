import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { pagesPath } from '../../.pathpida/$path'
import { useAddMyRecipe } from '../../hooks/recipe/useAddMyRecipe'
import { MyRecipeFormComponent } from '../../components/form/MyRecipeForm/MyRecipeFormComponent'
import { MyRecipeFormProvider } from '../../components/form/MyRecipeForm/MyRecipeFormProvider'
import { useMyRecipeFormContext } from '../../components/form/MyRecipeForm/hooks/useMyRecipeFormContext'
import { useNetworkFormSubmit } from '../../components/form/hooks/useNetworkFormSubmit'
import { MainLayoutComponent } from '../../components/abstract/MainLayout/MainLayoutComponent'
import { convertMyRecipeFormSchemaToRecipeData } from '../../components/form/MyRecipeForm/utils'

const Content = () => {
  const router = useRouter()
  const addMyRecipe = useAddMyRecipe()
  const useFormReturn = useMyRecipeFormContext()
  const { topErrorMessage, onSubmit } = useNetworkFormSubmit({
    execFunc: (data) => {
      const convertResult = convertMyRecipeFormSchemaToRecipeData(data)

      if (convertResult.isFailure()) {
        // 事前にバリデーションしてるのでconvertに失敗することはないはずだが、
        // いちおうここに来たらエラーは投げておく
        throw convertResult.error
      }

      return addMyRecipe(convertResult.value)
    },
    onSuccess: async () => {
      await router.push(pagesPath.$url())
    },
    useFormReturn,
  })

  return (
    <MainLayoutComponent titleContent={'Myレシピ作成'}>
      <MyRecipeFormComponent
        topErrorMessage={topErrorMessage}
        onSubmit={onSubmit}
      />
    </MainLayoutComponent>
  )
}

const MyRecipeCreatePage: NextPage = () => {
  return (
    <MyRecipeFormProvider
      defaultValues={{
        name: '',
        items: [],
      }}
    >
      <Content />
    </MyRecipeFormProvider>
  )
}

export default MyRecipeCreatePage
