import { RecipeSummary } from '../../../types/recipe'
import Link from 'next/link'
import { pagesPath } from '../../../.pathpida/$path'
import { TextLinkComponent } from '../../abstract/TextLink/TextLinkComponent'
import { ButtonComponent } from '../../abstract/Button/ButtonComponent'
import { IconComponent } from '../../abstract/Icon/IconComponent'
import { ListComponent } from '../../abstract/List/ListComponent'
import { ListItemComponent } from '../../abstract/List/ListItemComponent'
import { useCallback } from 'react'

const MyRecipeListItemContentComponent = ({
  myRecipe,
  onClickDelete,
}: {
  myRecipe: RecipeSummary
  onClickDelete: (id: string) => Promise<void>
}) => {
  const handleClickDeleteButton = useCallback(async () => {
    await onClickDelete(myRecipe.id)
  }, [myRecipe.id, onClickDelete])

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
          onClick={handleClickDeleteButton}
        >
          <IconComponent icon={'delete'} size={'xl'} />
        </ButtonComponent>
      </div>
    </div>
  )
}

type Props = {
  myRecipes: RecipeSummary[]
  onClickDelete: (id: string) => Promise<void>
}
export const MyRecipeListComponent = ({ myRecipes, onClickDelete }: Props) => {
  return (
    <ListComponent>
      {myRecipes.map((myRecipe) => (
        <ListItemComponent key={myRecipe.id}>
          <MyRecipeListItemContentComponent
            myRecipe={myRecipe}
            onClickDelete={onClickDelete}
          />
        </ListItemComponent>
      ))}
    </ListComponent>
  )
}
