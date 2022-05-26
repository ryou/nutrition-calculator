import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AnchorButtonComponent } from './AnchorButtonComponent'

export default {
  title: 'Abstract/AnchorButtonComponent',
  component: AnchorButtonComponent,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    disabled: false,
  },
} as ComponentMeta<typeof AnchorButtonComponent>

const Template: ComponentStory<typeof AnchorButtonComponent> = (args) => {
  return (
    <AnchorButtonComponent {...args} onClick={action('click')}>
      Btn
    </AnchorButtonComponent>
  )
}

export const Default = Template.bind({})
