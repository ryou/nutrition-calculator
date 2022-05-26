import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Nutrition } from '../../../types/foodstuff'
import { PFCRadarChartComponent } from './PFCRadarChartComponent'
import { getDummyNutrition } from '../../../libs/test/getDummyNutrition'
import {
  calcNutritionFromAmount,
  getRecommendedNutrition,
} from '../../../services/NutritionService'

const nutrition: Nutrition = getDummyNutrition(0.1)

export default {
  title: 'Concrete/PFCRadarChartComponent',
  component: PFCRadarChartComponent,
} as ComponentMeta<typeof PFCRadarChartComponent>

const Template: ComponentStory<typeof PFCRadarChartComponent> = (args) => {
  return <PFCRadarChartComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  nutrition: calcNutritionFromAmount(nutrition, 100),
  recommendedNutrition: getRecommendedNutrition(),
}
