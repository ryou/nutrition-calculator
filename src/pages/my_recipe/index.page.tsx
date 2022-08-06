import type { NextPage } from 'next'
import { MainLayoutComponent } from '../../components/abstract/MainLayout/MainLayoutComponent'
import { MyRecipeListComponent } from '../../components/concrete/MyRecipeList/MyRecipeListComponent'
import { useListMyRecipes } from '../../hooks/recipe/useListMyRecipes'
import { AlertComponent } from '../../components/abstract/Alert/AlertComponent'
import { useDeleteMyRecipe } from '../../hooks/recipe/useDeleteMyRecipe'
import { useCallback } from 'react'
import { RecipeSummary } from '../../types/recipe'

const MyRecipeListContainer = ({
  myRecipes,
}: {
  myRecipes: RecipeSummary[]
}) => {
  const deleteMyRecipe = useDeleteMyRecipe({
    invalidateOnSuccess: true,
  })

  const handleClickDelete = useCallback(
    async (id: string) => {
      if (window.confirm('レシピを削除しますか？')) {
        const result = await deleteMyRecipe(id)

        if (result.isFailure()) {
          alert('レシピ削除が失敗しました。')
          return
        }
      }
    },
    [deleteMyRecipe]
  )

  return (
    <MyRecipeListComponent
      myRecipes={myRecipes}
      onClickDelete={handleClickDelete}
    />
  )
}

const Content = () => {
  const { data, isError } = useListMyRecipes()

  return (
    <div>
      {isError ? (
        <AlertComponent type={'error'}>
          データの取得に失敗しました。
        </AlertComponent>
      ) : data === undefined ? (
        <div />
      ) : (
        <MyRecipeListContainer myRecipes={data} />
      )}
    </div>
  )
}

const MyRecipePage: NextPage = () => {
  return (
    <MainLayoutComponent titleContent={'Myレシピ一覧'}>
      <Content />
    </MainLayoutComponent>
  )
}

export default MyRecipePage
