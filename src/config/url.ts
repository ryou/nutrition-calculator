import { BASE_PATH } from './env'

export const API_URL = {
  // TODO: 複数と単数を分ける必要ある？
  getFoodstuffsUrl: () => `${BASE_PATH}/api/foodstuff`,
  getFoodstuffUrl: (id: string) => `${BASE_PATH}/api/foodstuff/${id}`,
  getMyRecipesUrl: () => `${BASE_PATH}/api/my_recipe`,
  getMyRecipeUrl: (id: string) => `${BASE_PATH}/api/my_recipe/${id}`,
}
