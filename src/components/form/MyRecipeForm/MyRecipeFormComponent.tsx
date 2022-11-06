import { useMyRecipeFormContext } from './hooks/useMyRecipeFormContext'
import { ButtonComponent } from '../../abstract/Button/ButtonComponent'
import {
  FieldArrayWithId,
  Path,
  SubmitHandler,
  useFieldArray,
  useWatch,
} from 'react-hook-form'
import { TextInputComponent } from '../../abstract/TextInput/TextInputComponent'
import { AlertComponent } from '../../abstract/Alert/AlertComponent'
import classNames from 'classnames'
import { IconComponent } from '../../abstract/Icon/IconComponent'
import { FoodstuffSearchResultComponent } from './localComponents/FoodstuffSearchResultComponent'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { SearchFormComponent } from '../../concrete/SearchForm/SearchFormComponent'
import { FoodstuffModalComponent } from '../../concrete/FoodstuffModal/FoodstuffModalComponent'
import { ListComponent } from '../../abstract/List/ListComponent'
import { ListItemComponent } from '../../abstract/List/ListItemComponent'
import { useRecipeNutrition } from '../../../hooks/recipe/useRecipeNutrition'
import { NutritionDetailComponent } from '../../concrete/NutritionDetail/NutritionDetailComponent'
import { MyRecipeFormSchema } from './MyRecipeFormProvider'
import { useDebounce } from 'use-debounce'
import { FoodstuffSummary } from '../../../types/foodstuff'
import { HeadingComponent } from '../../abstract/Heading/HeadingComponent'
import { ErrorMessageComponent } from '../../abstract/ErrorMessage/ErrorMessageComponent'
import { castStringToNumber } from '../../../libs/castStringToNumber'
import { useFormErrorMessage } from '../hooks/useFormErrorMessage'
import { UncontrolledAmountInputComponent } from '../../concrete/AmountInput/UncontrolledAmountInputComponent'
import { useFindFoodstuff } from '../../../hooks/foodstuff/useFindFoodstuff'

export const MyRecipeFormComponentTestId = {
  InputName: 'input_name',
  SubmitButton: 'button_submit',
  SearchForm: 'form_foodstuff_search',
  DeleteButton: (index: number) => `button_delete_${index}`,
}

type RecipeItemField = FieldArrayWithId<MyRecipeFormSchema, 'items'>

const useEditorMode = () => {
  const [mode, setMode] = useState<'recipe' | 'search'>('recipe')
  const [filteringKeyword, setFilteringKeyword] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [mode])

  const toSearchResult = useCallback((keyword: string) => {
    setFilteringKeyword(keyword)
    setMode('search')
  }, [])

  const toRecipeDetail = useCallback(() => {
    setMode('recipe')
  }, [])

  return {
    mode,
    filteringKeyword,
    toSearchResult,
    toRecipeDetail,
  }
}

const RecipeItemComponent = ({
  index,
  foodstuff,
  onClickDelete,
}: {
  index: number
  foodstuff: FoodstuffSummary
  onClickDelete: () => void
}) => {
  const useFormReturn = useMyRecipeFormContext()
  const { register } = useFormReturn
  const amountName: Path<MyRecipeFormSchema> = `items.${index}.amount`
  const amountErrorMessage = useFormErrorMessage(amountName, useFormReturn)

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const onClick = useCallback(() => {
    setModalIsVisible(true)
  }, [])

  const onClickClose = useCallback(() => {
    setModalIsVisible(false)
  }, [])

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="sm:flex items-end">
          <button type="button" className="link mr-4" onClick={onClick}>
            {foodstuff.name}
          </button>
          {foodstuff.unit.text && (
            <div
              className={classNames(['text-xs'])}
            >{`${foodstuff.unit.text}(${foodstuff.unit.amount}g)`}</div>
          )}
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-2">
            <UncontrolledAmountInputComponent
              {...register(amountName)}
              error={!!amountErrorMessage}
            />
            <ButtonComponent
              size={'sm'}
              shape={'circle'}
              color={'ghost'}
              onClick={onClickDelete}
              data-testid={MyRecipeFormComponentTestId.DeleteButton(index)}
            >
              <IconComponent icon={'delete'} size={'xl'} />
            </ButtonComponent>
          </div>
          <ErrorMessageComponent message={amountErrorMessage} />
        </div>
      </div>
      {modalIsVisible && (
        <FoodstuffModalComponent
          foodstuffId={foodstuff.id}
          onClose={onClickClose}
        />
      )}
    </>
  )
}

const RecipeItemContainerComponent = ({
  foodstuffId,
  ...rest
}: { foodstuffId: string } & Omit<
  React.ComponentProps<typeof RecipeItemComponent>,
  'foodstuff'
>) => {
  const { data, isError } = useFindFoodstuff(foodstuffId)

  return isError ? (
    <ErrorMessageComponent message="食材データ取得エラー" />
  ) : data === undefined ? (
    <div />
  ) : (
    <RecipeItemComponent foodstuff={data} {...rest} />
  )
}

const RecipeItemListComponent = ({
  children,
  recipeItemFields,
}: {
  children: (field: RecipeItemField, index: number) => ReactNode
  recipeItemFields: RecipeItemField[]
}) => {
  return (
    <>
      {recipeItemFields.length > 0 ? (
        <ListComponent>
          {recipeItemFields.map((field, index) => (
            <ListItemComponent key={field.id}>
              {children(field, index)}
            </ListItemComponent>
          ))}
        </ListComponent>
      ) : (
        <div className="text-sm">
          食材を検索して、レシピに食材を追加してください。
        </div>
      )}
    </>
  )
}

const RecipeNutritionComponent = React.memo(function RecipeNutritionComponent({
  foodstuffs,
}: {
  foodstuffs: { foodstuffId: string; amount: number }[]
}) {
  const { data, isError } = useRecipeNutrition(foodstuffs)

  return isError ? (
    <AlertComponent type={'error'}>データの取得に失敗しました。</AlertComponent>
  ) : data === undefined ? (
    <div />
  ) : (
    <NutritionDetailComponent nutrition={data} />
  )
})

const RecipeNutritionContainerComponent = React.memo(
  function RecipeNutritionContainerComponent() {
    const { control } = useMyRecipeFormContext()
    const items = useWatch({
      name: 'items',
      control,
      defaultValue: [],
    })
    // 栄養表示の再計算は負荷が高いのでDebounceする
    const [debouncedItems] = useDebounce(items, 500)
    const foodstuffs = useMemo(() => {
      return debouncedItems.map((field) => {
        const castedAmountResult = castStringToNumber(field.amount)
        //TODO: 不正な数値が渡された場合、エラー表示にすることを検討
        const amount = castedAmountResult.isSuccess()
          ? castedAmountResult.value
          : 0

        return {
          foodstuffId: field.foodstuffId,
          amount,
        }
      })
    }, [debouncedItems])

    return (
      <>
        {foodstuffs.length > 0 && (
          <RecipeNutritionComponent foodstuffs={foodstuffs} />
        )}
      </>
    )
  }
)

export const MyRecipeEditorComponent = ({
  recipeItemFields,
  onClickDelete,
  onClickSearch,
}: {
  recipeItemFields: RecipeItemField[]
  onClickDelete: (index: number) => Promise<void>
  onClickSearch: (keyword: string) => void
}) => {
  const useFormReturn = useMyRecipeFormContext()
  const { register } = useFormReturn
  const nameErrorMessage = useFormErrorMessage('name', useFormReturn)

  return (
    <>
      <div>
        <div>
          <HeadingComponent size={'sub'}>レシピ</HeadingComponent>
        </div>
        <div className="mt-8">
          <div>
            <HeadingComponent size={'subsub'}>レシピ名</HeadingComponent>
          </div>
          <div className="mt-4">
            <TextInputComponent
              {...register('name')}
              error={!!nameErrorMessage}
              data-testid={MyRecipeFormComponentTestId.InputName}
            />
            <ErrorMessageComponent message={nameErrorMessage} />
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-4">
            <HeadingComponent size={'subsub'}>使用食材</HeadingComponent>
          </div>
          <div>
            <RecipeItemListComponent recipeItemFields={recipeItemFields}>
              {(field, index) => (
                <RecipeItemContainerComponent
                  foodstuffId={field.foodstuffId}
                  index={index}
                  onClickDelete={() => onClickDelete(index)}
                />
              )}
            </RecipeItemListComponent>
          </div>
          <div className="mt-4">
            <SearchFormComponent
              id={MyRecipeFormComponentTestId.SearchForm}
              onSubmit={onClickSearch}
              submitText="食材検索"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <RecipeNutritionContainerComponent />
      </div>
      <div className="text-center mt-8">
        <ButtonComponent
          type="submit"
          xSize={'wide'}
          color={'primary'}
          data-testid={MyRecipeFormComponentTestId.SubmitButton}
        >
          登録
        </ButtonComponent>
      </div>
    </>
  )
}

export const MyRecipeFormComponent = ({
  topErrorMessage,
  onSubmit,
}: {
  topErrorMessage: string
  onSubmit: SubmitHandler<MyRecipeFormSchema>
}) => {
  const { handleSubmit, control } = useMyRecipeFormContext()
  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control,
  })
  const { mode, filteringKeyword, toSearchResult, toRecipeDetail } =
    useEditorMode()

  const onClickAdd = useCallback(
    (foodstuffId: string, amount: string) => {
      append(
        {
          foodstuffId,
          amount,
        },
        // 検索画面から量を指定して追加するというUIの場合、追加時に自動でフォーカスされることにメリットがなく、
        // スマホで使いにくすぎるというデメリットしかないのでfalseに
        { shouldFocus: false }
      )
      toRecipeDetail()
    },
    [toRecipeDetail, append]
  )

  const onClickDelete = useCallback(
    async (index: number) => {
      remove(index)
    },
    [remove]
  )

  return (
    // TODO: formの場所はここでいい？
    <form onSubmit={handleSubmit(onSubmit)}>
      {mode === 'search' && (
        <FoodstuffSearchResultComponent
          keyword={filteringKeyword}
          onClickAdd={onClickAdd}
          onClickBack={toRecipeDetail}
        />
      )}
      <div
        className={classNames({
          hidden: mode !== 'recipe',
        })}
      >
        {topErrorMessage.length > 0 && (
          <div className="mb-8">
            <AlertComponent type={'error'}>{topErrorMessage}</AlertComponent>
          </div>
        )}
        <MyRecipeEditorComponent
          recipeItemFields={fields}
          onClickDelete={onClickDelete}
          onClickSearch={toSearchResult}
        />
      </div>
    </form>
  )
}
