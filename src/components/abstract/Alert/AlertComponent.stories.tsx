import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AlertComponent } from './AlertComponent'

export default {
  title: 'Abstract/AlertComponent',
  component: AlertComponent,
} as ComponentMeta<typeof AlertComponent>

const Template: ComponentStory<typeof AlertComponent> = (args) => {
  return (
    <AlertComponent {...args}>サンプルテキストサンプルテキスト</AlertComponent>
  )
}

export const Default = Template.bind({})
