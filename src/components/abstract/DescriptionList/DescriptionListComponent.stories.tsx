import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DescriptionListComponent } from './DescriptionListComponent'
import { DescriptionListItemComponent } from './DescriptionListItemComponent'

export default {
  title: 'Abstract/DescriptionListComponent',
  component: DescriptionListComponent,
} as ComponentMeta<typeof DescriptionListComponent>

const Template: ComponentStory<typeof DescriptionListComponent> = (args) => {
  return <DescriptionListComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <DescriptionListItemComponent title="タイトル">
        説明文
      </DescriptionListItemComponent>
      <DescriptionListItemComponent title="タイトル">
        説明文
      </DescriptionListItemComponent>
      <DescriptionListItemComponent title="タイトル">
        説明文
      </DescriptionListItemComponent>
      <DescriptionListItemComponent title="タイトル">
        説明文
      </DescriptionListItemComponent>
    </>
  ),
}
