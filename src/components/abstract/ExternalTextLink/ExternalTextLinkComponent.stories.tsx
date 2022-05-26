import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExternalTextLinkComponent } from './ExternalTextLinkComponent'

export default {
  title: 'Abstract/ExternalTextLinkComponent',
  component: ExternalTextLinkComponent,
} as ComponentMeta<typeof ExternalTextLinkComponent>

const Template: ComponentStory<typeof ExternalTextLinkComponent> = (args) => {
  return <ExternalTextLinkComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'リンクテキスト',
  href: 'https://example.com',
}
