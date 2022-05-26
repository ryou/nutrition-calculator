import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextLinkComponent } from './TextLinkComponent'

export default {
  title: 'Abstract/TextLinkComponent',
  component: TextLinkComponent,
} as ComponentMeta<typeof TextLinkComponent>

const Template: ComponentStory<typeof TextLinkComponent> = (args) => {
  return <TextLinkComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'リンクテキスト',
}
