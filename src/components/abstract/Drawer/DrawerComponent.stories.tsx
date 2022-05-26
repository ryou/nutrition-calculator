import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DrawerComponent } from './DrawerComponent'

export default {
  title: 'Abstract/DrawerComponent',
  component: DrawerComponent,
} as ComponentMeta<typeof DrawerComponent>

const Template: ComponentStory<typeof DrawerComponent> = (args) => {
  return <DrawerComponent {...args}>Content</DrawerComponent>
}

export const Default = Template.bind({})
