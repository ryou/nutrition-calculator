import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MyRecipeListComponent } from './MyRecipeListComponent'

export default {
  title: 'Concrete/MyRecipeListComponent',
  component: MyRecipeListComponent,
} as ComponentMeta<typeof MyRecipeListComponent>

const Template: ComponentStory<typeof MyRecipeListComponent> = (args) => {
  return <MyRecipeListComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  myRecipes: [
    {
      id: '1',
      name: 'サンプルレシピ01',
    },
    {
      id: '2',
      name: 'サンプルレシピ02',
    },
    {
      id: '3',
      name: 'サンプルレシピ03',
    },
  ],
}
