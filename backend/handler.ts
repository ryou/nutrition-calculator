import { getMockStatusResolvers } from './resolvers/mockStatusResolvers'
import { getFoodstuffResolver } from './resolvers/foodstuffResolver'
import { getMyRecipeResolver } from './resolvers/myRecipeResolver'

export const getHandlers = (basePath: string) => {
  return [
    ...getMockStatusResolvers(basePath),
    ...getFoodstuffResolver(basePath),
    ...getMyRecipeResolver(basePath),
  ]
}
