import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SingleBarChartComponent } from './SingleBarChartComponent'

export default {
  title: 'Concrete/SingleBarChartComponent',
  component: SingleBarChartComponent,
} as ComponentMeta<typeof SingleBarChartComponent>

const Template: ComponentStory<typeof SingleBarChartComponent> = (args) => {
  return <SingleBarChartComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'サンプル',
  max: 100,
  data: 10,
  unit: 'g',
}
