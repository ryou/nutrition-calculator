import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Nutrition } from '../../../types/foodstuff'
import { NutritionDetailComponent } from './NutritionDetailComponent'
import { getDummyNutrition } from '../../../libs/test/getDummyNutrition'
import { calcNutritionFromAmount } from '../../../services/NutritionService'

const nutrition: Nutrition = getDummyNutrition(0.1)

export default {
  title: 'Concrete/NutritionDetailComponent',
  component: NutritionDetailComponent,
} as ComponentMeta<typeof NutritionDetailComponent>

const Template: ComponentStory<typeof NutritionDetailComponent> = (args) => {
  return <NutritionDetailComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  nutrition: calcNutritionFromAmount(nutrition, 100),
}
