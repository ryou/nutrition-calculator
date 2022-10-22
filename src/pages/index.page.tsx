import type { NextPage } from 'next'
import Link from 'next/link'
import { AnchorButtonComponent } from '../components/abstract/Button/AnchorButtonComponent'
import { pagesPath } from '../.pathpida/$path'
import { RecipeSummary } from '../types/recipe'
import { useDeleteMyRecipe } from '../hooks/recipe/useDeleteMyRecipe'
import { useCallback } from 'react'
import { MyRecipeListComponent } from '../components/concrete/MyRecipeList/MyRecipeListComponent'
import { useListMyRecipes } from '../hooks/recipe/useListMyRecipes'
import { AlertComponent } from '../components/abstract/Alert/AlertComponent'
import { MainLayoutComponent } from '../components/abstract/MainLayout/MainLayoutComponent'

const MyRecipeList = ({ myRecipes }: { myRecipes: RecipeSummary[] }) => {
  const deleteMyRecipe = useDeleteMyRecipe()

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

const MyRecipeListSection = () => {
  const { data, isError } = useListMyRecipes()

  return (
    <MainLayoutComponent titleContent={'Myレシピ一覧'}>
      {isError ? (
        <AlertComponent type={'error'}>
          データの取得に失敗しました。
        </AlertComponent>
      ) : data === undefined ? (
        <div />
      ) : (
        <MyRecipeList myRecipes={data} />
      )}
    </MainLayoutComponent>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <MyRecipeListSection />
      <div className="mt-8">
        <Link href={pagesPath.my_recipe.create.$url()} passHref>
          <AnchorButtonComponent size={'lg'} xSize={'block'} outline>
            Myレシピ作成
          </AnchorButtonComponent>
        </Link>
      </div>
    </>
  )
}

export default Home
