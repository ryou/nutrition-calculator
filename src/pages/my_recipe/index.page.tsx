import type { NextPage } from 'next'
import { useListMyRecipes } from '../../hooks/recipe/useListMyRecipes'
import { ListComponent } from '../../components/abstract/List/ListComponent'
import { ListItemComponent } from '../../components/abstract/List/ListItemComponent'
import { ButtonComponent } from '../../components/abstract/Button/ButtonComponent'
import { IconComponent } from '../../components/abstract/Icon/IconComponent'
import { useCallback } from 'react'
import { pagesPath } from '../../.pathpida/$path'
import { useDeleteMyRecipe } from '../../hooks/recipe/useDeleteMyRecipe'
import { AlertComponent } from '../../components/abstract/Alert/AlertComponent'
import { RecipeSummary } from '../../types/recipe'
import Link from 'next/link'
import { TextLinkComponent } from '../../components/abstract/TextLink/TextLinkComponent'
import { MainLayoutComponent } from '../../components/abstract/MainLayout/MainLayoutComponent'

const MyRecipeListItemContentComponent = ({
  myRecipe,
}: {
  myRecipe: RecipeSummary
}) => {
  const deleteMyRecipe = useDeleteMyRecipe(myRecipe.id, {
    invalidateOnSuccess: true,
  })

  const onClickDelete = useCallback(async () => {
    if (window.confirm('レシピを削除しますか？')) {
      const result = await deleteMyRecipe()

      if (result.isFailure()) {
        alert('レシピ削除が失敗しました。')
        return
      }
    }
  }, [deleteMyRecipe])

  return (
    <div className="flex justify-between items-center">
      <div>
        <Link
          href={pagesPath.my_recipe.detail.$url({
            query: {
              id: myRecipe.id,
            },
          })}
          passHref
        >
          <TextLinkComponent>{myRecipe.name}</TextLinkComponent>
        </Link>
      </div>
      <div>
        <ButtonComponent
          shape={'circle'}
          color={'ghost'}
          size={'sm'}
          onClick={onClickDelete}
        >
          <IconComponent icon={'delete'} size={'xl'} />
        </ButtonComponent>
      </div>
    </div>
  )
}

const Content = ({ myRecipes }: { myRecipes: RecipeSummary[] }) => {
  return (
    <ListComponent>
      {myRecipes.map((myRecipe) => (
        <ListItemComponent key={myRecipe.id}>
          <MyRecipeListItemContentComponent myRecipe={myRecipe} />
        </ListItemComponent>
      ))}
    </ListComponent>
  )
}

const MyRecipePage: NextPage = () => {
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
        <Content myRecipes={data} />
      )}
    </MainLayoutComponent>
  )
}

export default MyRecipePage
