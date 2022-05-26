import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LabeledTextInputComponent } from './LabeledTextInputComponent'

export default {
  title: 'Abstract/LabeledTextInputComponent',
  component: LabeledTextInputComponent,
  argTypes: {
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    disabled: false,
    readOnly: false,
  },
} as ComponentMeta<typeof LabeledTextInputComponent>

const Template: ComponentStory<typeof LabeledTextInputComponent> = (args) => {
  return <LabeledTextInputComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: '¥',
}
