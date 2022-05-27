import { ControlledNumberInputComponent } from '../../abstract/NumberInput/ControlledNumberInputComponent'
import { BaseAmountInputComponent } from './BaseAmountInputComponent'

type Props = Omit<
  React.ComponentProps<typeof ControlledNumberInputComponent>,
  'size'
>
export const ControlledAmountInputComponent = ({ ...props }: Props) => {
  return (
    <BaseAmountInputComponent>
      <ControlledNumberInputComponent {...props} size={'sm'} />
    </BaseAmountInputComponent>
  )
}
