import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FoodstuffDetailComponent } from './FoodstuffDetailComponent'
import { Foodstuff } from '../../../types/foodstuff'
import { getDummyFoodstuff } from '../../../libs/test/getDummyFoodstuff'

const foodstuff: Foodstuff = {
  ...getDummyFoodstuff(0.1),
  id: 'food_01',
  name: '食品名',
  unit: {
    text: '1個',
    amount: 125,
  },
}

export default {
  title: 'Concrete/FoodstuffDetailComponent',
  component: FoodstuffDetailComponent,
} as ComponentMeta<typeof FoodstuffDetailComponent>

const Template: ComponentStory<typeof FoodstuffDetailComponent> = (args) => {
  return <FoodstuffDetailComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  foodstuff,
}
