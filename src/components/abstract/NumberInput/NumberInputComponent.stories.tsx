import React, { useState } from 'react'
import { UncontrolledNumberInputComponent } from './UncontrolledNumberInputComponent'
import { ControlledNumberInputComponent } from './ControlledNumberInputComponent'
import { Story } from '@storybook/react'
import { StackComponent } from '../Stack/StackComponent'

export default {
  title: 'Abstract/NumberInputComponent',
  component: UncontrolledNumberInputComponent,
  subcomponents: [ControlledNumberInputComponent],
}

export const UncontrolledNumberInput: Story = () => {
  return (
    <StackComponent>
      <p>非制御コンポーネントパターン</p>
      <UncontrolledNumberInputComponent />
    </StackComponent>
  )
}
UncontrolledNumberInput.parameters = {
  control: {
    hideNoControlsWarning: true,
  },
}

export const ControlledNumberInput: Story = () => {
  const [value, setValue] = useState('')

  return (
    <StackComponent>
      <p>制御コンポーネントパターン</p>
      <ControlledNumberInputComponent
        value={value}
        onValueChange={async (value) => setValue(value)}
      />
    </StackComponent>
  )
}
ControlledNumberInput.parameters = {
  control: {
    hideNoControlsWarning: true,
  },
}
