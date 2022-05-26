import { HeadingComponent } from './HeadingComponent'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Abstract/HeadingComponent',
  component: HeadingComponent,
  args: {
    children: 'サンプル見出し',
  },
} as ComponentMeta<typeof HeadingComponent>

const Template: ComponentStory<typeof HeadingComponent> = (args) => {
  return <HeadingComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  size: 'main',
}
