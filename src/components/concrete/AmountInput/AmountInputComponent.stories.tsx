import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { UncontrolledAmountInputComponent } from './UncontrolledAmountInputComponent'
import { ControlledAmountInputComponent } from './ControlledAmountInputComponent'
import { StackComponent } from '../../abstract/Stack/StackComponent'

export default {
  title: 'Concrete/AmountInputComponent',
  component: UncontrolledAmountInputComponent,
  subcomponents: [ControlledAmountInputComponent],
}

export const UncontrolledAmountInput: Story = () => {
  return (
    <StackComponent>
      <p>非制御コンポーネントパターン</p>
      <UncontrolledAmountInputComponent />
    </StackComponent>
  )
}
UncontrolledAmountInput.parameters = {
  control: {
    hideNoControlsWarning: true,
  },
}

export const ControlledAmountInput: Story = () => {
  const [value, setValue] = useState('')

  return (
    <StackComponent>
      <p>制御コンポーネントパターン</p>
      <ControlledAmountInputComponent
        value={value}
        onValueChange={async (value) => setValue(value)}
      />
    </StackComponent>
  )
}
ControlledAmountInput.parameters = {
  control: {
    hideNoControlsWarning: true,
  },
}
