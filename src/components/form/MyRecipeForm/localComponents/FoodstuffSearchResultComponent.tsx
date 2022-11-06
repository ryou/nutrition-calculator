import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import { ButtonComponent } from '../../../abstract/Button/ButtonComponent'
import { FoodstuffSummary } from '../../../../types/foodstuff'
import { FoodstuffModalComponent } from '../../../concrete/FoodstuffModal/FoodstuffModalComponent'
import { ListComponent } from '../../../abstract/List/ListComponent'
import { ListItemComponent } from '../../../abstract/List/ListItemComponent'
import { useSearchFoodstuffs } from '../../../../hooks/foodstuff/useSearchFoodstuffs'
import { AlertComponent } from '../../../abstract/Alert/AlertComponent'
import { IconComponent } from '../../../abstract/Icon/IconComponent'
import { UncontrolledAmountInputComponent } from '../../../concrete/AmountInput/UncontrolledAmountInputComponent'
import { ZodFormSchema } from '../../../../libs/ZodFormSchema'
import * as z from 'zod'
import { ApiRequestBody } from '../../../../../shared/types/ApiRequestBody'
import { useDefaultForm } from '../../hooks/useDefaultForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormErrorMessage } from '../../hooks/useFormErrorMessage'
import { ErrorMessageComponent } from '../../../abstract/ErrorMessage/ErrorMessageComponent'

export const FoodstuffSearchResultComponentTestId = {
  AddButton: (id: string) => `button_add_${id}`,
}

const foodstuffListItemFormSchema = z.object({
  amount: ZodFormSchema.getNumberInputSchema({
    min: ApiRequestBody.RECIPE_FOODSTUFF_AMOUNT_MIN,
    max: ApiRequestBody.RECIPE_FOODSTUFF_AMOUNT_MAX,
  }),
})
type FoodstuffListItemFormSchema = z.infer<typeof foodstuffListItemFormSchema>

const FoodstuffListItemComponent = ({
  foodstuff,
  onClickAdd,
}: {
  foodstuff: FoodstuffSummary
  onClickAdd: (foodstuffId: string, amount: string) => void
}) => {
  const useFormReturn = useDefaultForm<FoodstuffListItemFormSchema>(
    {
      amount: String(foodstuff.unit.amount),
    },
    zodResolver(foodstuffListItemFormSchema)
  )
  const onSubmit = useCallback(
    (data: FoodstuffListItemFormSchema) => {
      onClickAdd(foodstuff.id, data.amount)
    },
    [onClickAdd, foodstuff.id]
  )
  const amountErrorMessage = useFormErrorMessage('amount', useFormReturn)

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
        <div>
          <form
            onSubmit={useFormReturn.handleSubmit(onSubmit)}
            className={classNames(['flex', 'gap-2'])}
          >
            <UncontrolledAmountInputComponent
              {...useFormReturn.register('amount')}
              error={!!amountErrorMessage}
            />
            <ButtonComponent
              size="sm"
              type="submit"
              data-testid={FoodstuffSearchResultComponentTestId.AddButton(
                foodstuff.id
              )}
            >
              <span>追加</span>
            </ButtonComponent>
          </form>
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

const FoodstuffListComponent = ({
  items,
  onClickAdd,
}: {
  items: FoodstuffSummary[]
  onClickAdd: (foodstuffId: string, amount: string) => void
}) => {
  return (
    <ListComponent>
      {items.map((item) => (
        <ListItemComponent key={item.id}>
          <FoodstuffListItemComponent
            foodstuff={item}
            onClickAdd={onClickAdd}
          />
        </ListItemComponent>
      ))}
    </ListComponent>
  )
}

const BackToRecipeDetailButtonComponent = ({
  onClick,
}: {
  onClick: () => void
}) => {
  return (
    <ButtonComponent onClick={onClick} xSize={'block'} color={'ghost'}>
      <span className="mr-2">
        <IconComponent icon={'arrow_back'} />
      </span>
      レシピ詳細へ戻る
    </ButtonComponent>
  )
}

export const FoodstuffSearchResultComponent = ({
  keyword,
  onClickAdd,
  onClickBack,
}: {
  keyword: string
  onClickAdd: (foodstuffId: string, amount: string) => void
  onClickBack: () => void
}) => {
  const { data, isError } = useSearchFoodstuffs(keyword)

  return (
    <div>
      <div className="mb-8">
        <BackToRecipeDetailButtonComponent onClick={onClickBack} />
      </div>
      <div className="text-2xl font-bold mb-8">「{keyword}」の検索結果</div>
      <div className="mb-8">
        {isError ? (
          <AlertComponent type={'error'}>
            データの取得に失敗しました。
          </AlertComponent>
        ) : data === undefined ? (
          <div />
        ) : (
          <FoodstuffListComponent items={data} onClickAdd={onClickAdd} />
        )}
      </div>
      <BackToRecipeDetailButtonComponent onClick={onClickBack} />
    </div>
  )
}
