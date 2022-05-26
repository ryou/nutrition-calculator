import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ListComponent } from './ListComponent'
import { ListItemComponent } from './ListItemComponent'

export default {
  title: 'Abstract/ListComponent',
  component: ListComponent,
} as ComponentMeta<typeof ListComponent>

const Template: ComponentStory<typeof ListComponent> = (args) => {
  return <ListComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <ListItemComponent>サンプルテキスト</ListItemComponent>
      <ListItemComponent>サンプルテキスト</ListItemComponent>
      <ListItemComponent>サンプルテキスト</ListItemComponent>
      <ListItemComponent>サンプルテキスト</ListItemComponent>
      <ListItemComponent>サンプルテキスト</ListItemComponent>
    </>
  ),
}
