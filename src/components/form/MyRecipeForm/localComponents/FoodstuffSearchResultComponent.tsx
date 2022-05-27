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
import { ControlledAmountInputComponent } from '../../../concrete/AmountInput/ControlledAmountInputComponent'

export const FoodstuffSearchResultComponentTestId = {
  AddButton: (id: string) => `button_add_${id}`,
}

const FoodstuffListItemComponent = ({
  foodstuff,
  onClickAdd,
}: {
  foodstuff: FoodstuffSummary
  onClickAdd: (foodstuff: FoodstuffSummary, amount: string) => void
}) => {
  const [amount, setAmount] = useState(`${foodstuff.unit.amount}`)

  const _onClickAdd = useCallback(() => {
    onClickAdd(foodstuff, amount)
  }, [foodstuff, onClickAdd, amount])

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
          <div className={classNames(['flex', 'gap-2'])}>
            <ControlledAmountInputComponent
              value={amount}
              onValueChange={async (value) => setAmount(value)}
            />
            <ButtonComponent
              size={'sm'}
              onClick={_onClickAdd}
              data-testid={FoodstuffSearchResultComponentTestId.AddButton(
                foodstuff.id
              )}
            >
              <span>追加</span>
            </ButtonComponent>
          </div>
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
  onClickAdd: (foodstuff: FoodstuffSummary, amount: string) => void
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
  onClickAdd: (foodstuff: FoodstuffSummary, amount: string) => void
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
