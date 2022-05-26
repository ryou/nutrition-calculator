import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AmountInputComponent } from './AmountInputComponent'

export default {
  title: 'Concrete/AmountInputComponent',
  component: AmountInputComponent,
} as ComponentMeta<typeof AmountInputComponent>

const Template: ComponentStory<typeof AmountInputComponent> = (args) => {
  return <AmountInputComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {}
