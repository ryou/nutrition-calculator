import { NutritionDetailComponent } from '../NutritionDetail/NutritionDetailComponent'
import { ExternalTextLinkComponent } from '../../abstract/ExternalTextLink/ExternalTextLinkComponent'
import { useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Foodstuff } from '../../../types/foodstuff'
import { HeadingComponent } from '../../abstract/Heading/HeadingComponent'
import { calcNutritionFromAmount } from '../../../services/NutritionService'
import { castStringToNumber } from '../../../libs/castStringToNumber'
import { ControlledAmountInputComponent } from '../AmountInput/ControlledAmountInputComponent'

type Props = {
  foodstuff: Foodstuff
}
export const FoodstuffDetailComponent = ({ foodstuff }: Props) => {
  const unitAmount = foodstuff.unit.amount
  const [amountString, setAmountString] = useState(`${unitAmount}`)
  const amount = useMemo(() => {
    const result = castStringToNumber(amountString)
    if (result.isFailure()) {
      return 0
    }

    return result.value
  }, [amountString])
  const [debouncedAmount] = useDebounce(amount, 500)

  const actualNutrition = useMemo(
    () => calcNutritionFromAmount(foodstuff.nutrition, debouncedAmount),
    [foodstuff.nutrition, debouncedAmount]
  )

  // TODO: このURL、どっかで管理したほうが良い？
  const sourceUrl = `https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=${foodstuff.id}`

  return (
    <div>
      <div>
        <span className="inline-block mr-2">
          <HeadingComponent size={'main'}>{foodstuff.name}</HeadingComponent>
        </span>
        <span className="text-sm inline-block align-bottom">
          {unitAmount}g
          {foodstuff.unit.text !== undefined && `(${foodstuff.unit.text})`}
        </span>
      </div>
      <div className="text-sm mt-4">
        <ControlledAmountInputComponent
          value={amountString}
          onValueChange={async (value) => setAmountString(value)}
        />
        あたりの栄養量
      </div>
      <div className="mt-8">
        <NutritionDetailComponent nutrition={actualNutrition} />
      </div>
      <div className="text-xs text-right mt-4">
        食品成分に関しては、
        <ExternalTextLinkComponent href={sourceUrl}>
          食品成分データベースのデータ
        </ExternalTextLinkComponent>
        を元に算出しております。
      </div>
    </div>
  )
}
