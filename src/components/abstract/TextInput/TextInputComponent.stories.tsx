import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextInputComponent } from './TextInputComponent'

export default {
  title: 'Abstract/TextInputComponent',
  component: TextInputComponent,
  argTypes: {
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    disabled: false,
    readOnly: false,
  },
} as ComponentMeta<typeof TextInputComponent>

const Template: ComponentStory<typeof TextInputComponent> = (args) => {
  return <TextInputComponent {...args} />
}

export const Default = Template.bind({})
