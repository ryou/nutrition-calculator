import React, { useCallback, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonGroupComponent } from './ButtonGroupComponent'

export default {
  title: 'Abstract/ButtonGroupComponent',
  component: ButtonGroupComponent,
} as ComponentMeta<typeof ButtonGroupComponent>

const Template: ComponentStory<typeof ButtonGroupComponent> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined)

  const onChange = useCallback((newValue: string) => setValue(newValue), [])

  return <ButtonGroupComponent {...args} value={value} onChange={onChange} />
}

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      label: '選択肢1',
      value: '1',
    },
    {
      label: '選択肢2',
      value: '2',
    },
    {
      label: '選択肢3',
      value: '3',
    },
  ],
}
