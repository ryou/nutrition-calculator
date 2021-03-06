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
import React, { useCallback, useEffect, useMemo, useState } from 'react'
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

export const MyRecipeFormComponentTestId = {
  InputName: 'input_name',
  SubmitButton: 'button_submit',
  SearchForm: 'form_foodstuff_search',
  DeleteButton: (index: number) => `button_delete_${index}`,
}

type RecipeItemFields = FieldArrayWithId<MyRecipeFormSchema, 'items'>[]

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

const RecipeItemListComponent = ({
  recipeItemFields,
  onClickDelete,
}: {
  recipeItemFields: RecipeItemFields
  onClickDelete: (index: number) => Promise<void>
}) => {
  const _onClickDelete = useCallback(
    async (index: number) => {
      await onClickDelete(index)
    },
    [onClickDelete]
  )

  return (
    <>
      {recipeItemFields.length > 0 ? (
        <ListComponent>
          {recipeItemFields.map((field, index) => (
            <ListItemComponent key={field.id}>
              <RecipeItemComponent
                index={index}
                foodstuff={field.foodstuff}
                onClickDelete={() => _onClickDelete(index)}
              />
            </ListItemComponent>
          ))}
        </ListComponent>
      ) : (
        <div className="text-sm">
          ????????????????????????????????????????????????????????????????????????
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
    <AlertComponent type={'error'}>??????????????????????????????????????????</AlertComponent>
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
    // ????????????????????????????????????????????????Debounce??????
    const [debouncedItems] = useDebounce(items, 500)
    const foodstuffs = useMemo(() => {
      return debouncedItems.map((field) => {
        const castedAmountResult = castStringToNumber(field.amount)
        //TODO: ??????????????????????????????????????????????????????????????????????????????
        const amount = castedAmountResult.isSuccess()
          ? castedAmountResult.value
          : 0

        return {
          foodstuffId: field.foodstuff.id,
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
  recipeItemFields: RecipeItemFields
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
          <HeadingComponent size={'sub'}>?????????</HeadingComponent>
        </div>
        <div className="mt-8">
          <div>
            <HeadingComponent size={'subsub'}>????????????</HeadingComponent>
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
            <HeadingComponent size={'subsub'}>????????????</HeadingComponent>
          </div>
          <div>
            <RecipeItemListComponent
              recipeItemFields={recipeItemFields}
              onClickDelete={onClickDelete}
            />
          </div>
          <div className="mt-4">
            <SearchFormComponent
              id={MyRecipeFormComponentTestId.SearchForm}
              onSubmit={onClickSearch}
              submitText="????????????"
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
          ??????
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
    (foodstuff: FoodstuffSummary, amount: string) => {
      append(
        {
          foodstuff,
          amount,
        },
        // ?????????????????????????????????????????????????????????UI??????????????????????????????????????????????????????????????????????????????????????????
        // ???????????????????????????????????????????????????????????????????????????false???
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
    // TODO: form??????????????????????????????
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
