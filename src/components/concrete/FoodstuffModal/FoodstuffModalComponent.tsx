import { FoodstuffDetailComponent } from '../FoodstuffDetail/FoodstuffDetailComponent'
import { ModalComponent } from '../../abstract/Modal/ModalComponent'
import { useFindFoodstuff } from '../../../hooks/foodstuff/useFindFoodstuff'
import { AlertComponent } from '../../abstract/Alert/AlertComponent'

type Props = {
  foodstuffId: string
  onClose: () => void
}
export const FoodstuffModalComponent = ({ foodstuffId, onClose }: Props) => {
  const { data, isError } = useFindFoodstuff(foodstuffId)

  return (
    <ModalComponent onClose={onClose}>
      {isError ? (
        <AlertComponent type={'error'}>
          データの取得に失敗しました。
        </AlertComponent>
      ) : data === undefined ? (
        <div />
      ) : (
        <FoodstuffDetailComponent foodstuff={data} />
      )}
    </ModalComponent>
  )
}
