import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MyRecipeFormComponent } from './MyRecipeFormComponent'
import { MyRecipeFormProvider } from './MyRecipeFormProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { QUERY_OPTION } from '../../../config/queryOption'
import { useBackend } from '../../../hooks/useBackend'

export default {
  title: 'Form/MyRecipeFormComponent',
  component: MyRecipeFormComponent,
} as ComponentMeta<typeof MyRecipeFormComponent>

const queryClient = new QueryClient({
  defaultOptions: {
    queries: QUERY_OPTION.DEFAULT,
  },
})

// TODO: サンプルデータでなく実際のデータ使うのはどうなんやろか？
const Template: ComponentStory<typeof MyRecipeFormComponent> = (args) => {
  const { initialized } = useBackend()

  return (
    <div>
      {initialized && (
        <QueryClientProvider client={queryClient}>
          <MyRecipeFormProvider
            defaultValues={{
              name: '',
              items: [],
            }}
          >
            <MyRecipeFormComponent {...args} />
          </MyRecipeFormProvider>
        </QueryClientProvider>
      )}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  topErrorMessage: '',
}
