import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModalComponent } from './ModalComponent'
import { ButtonComponent } from '../Button/ButtonComponent'

export default {
  title: 'Abstract/ModalComponent',
  component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>

const Template: ComponentStory<typeof ModalComponent> = (args) => {
  return <ModalComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'サンプルテキストサンプルテキスト',
}

export const WithAction = Template.bind({})
WithAction.args = {
  children: 'サンプルテキストサンプルテキスト',
  actionAreaContent: (
    <>
      <ButtonComponent color={'ghost'}>OK</ButtonComponent>
    </>
  ),
}

export const WithScroll = Template.bind({})
WithScroll.args = {
  children: (
    <>
      <ul>
        <li className="mb-16">サンプルテキスト</li>
        <li className="mb-16">サンプルテキスト</li>
        <li className="mb-16">サンプルテキスト</li>
        <li className="mb-16">サンプルテキスト</li>
        <li className="mb-16">サンプルテキスト</li>
        <li className="mb-16">サンプルテキスト</li>
        <li className="mb-0">サンプルテキスト</li>
      </ul>
    </>
  ),
}
