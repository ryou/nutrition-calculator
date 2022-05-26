import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonComponent } from './ButtonComponent'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Abstract/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    disabled: false,
  },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => {
  return (
    <ButtonComponent {...args} onClick={action('click')}>
      Btn
    </ButtonComponent>
  )
}

export const Default = Template.bind({})
