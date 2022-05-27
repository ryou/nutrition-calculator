import { BaseAmountInputComponent } from './BaseAmountInputComponent'
import { UncontrolledNumberInputComponent } from '../../abstract/NumberInput/UncontrolledNumberInputComponent'
import React from 'react'

type Props = Omit<
  React.ComponentProps<typeof UncontrolledNumberInputComponent>,
  'size'
>
export const UncontrolledAmountInputComponent = React.forwardRef<
  HTMLInputElement,
  Props
>(function UncontrolledAmountInputComponent({ ...props }: Props, ref) {
  return (
    <BaseAmountInputComponent>
      <UncontrolledNumberInputComponent ref={ref} {...props} size={'sm'} />
    </BaseAmountInputComponent>
  )
})
