import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { QUERY_OPTION } from '../../../config/queryOption'
import { useBackend } from '../../../hooks/useBackend'
import { FoodstuffModalComponent } from './FoodstuffModalComponent'

export default {
  title: 'Concrete/FoodstuffModalComponent',
  component: FoodstuffModalComponent,
} as ComponentMeta<typeof FoodstuffModalComponent>

const queryClient = new QueryClient({
  defaultOptions: {
    queries: QUERY_OPTION.DEFAULT,
  },
})

// TODO: サンプルデータでなく実際のデータ使うのはどうなんやろか？
const Template: ComponentStory<typeof FoodstuffModalComponent> = (args) => {
  const { initialized } = useBackend()

  return (
    <div>
      {initialized && (
        <QueryClientProvider client={queryClient}>
          <FoodstuffModalComponent {...args} />
        </QueryClientProvider>
      )}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  foodstuffId: '1_01083_7',
}
