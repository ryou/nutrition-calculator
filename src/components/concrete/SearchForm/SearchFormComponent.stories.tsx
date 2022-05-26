import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchFormComponent } from './SearchFormComponent'

export default {
  title: 'Concrete/SearchFormComponentComponent',
  component: SearchFormComponent,
} as ComponentMeta<typeof SearchFormComponent>

const Template: ComponentStory<typeof SearchFormComponent> = (args) => {
  return <SearchFormComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  id: 'sample',
}
