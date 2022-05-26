import { API_URL } from '../../config/url'

export const MOCK_API_URL = {
  FOODSTUFFS: API_URL.getFoodstuffsUrl(),
  FOODSTUFF: API_URL.getFoodstuffUrl(':id'),
  MY_RECIPES: API_URL.getMyRecipesUrl(),
  MY_RECIPE: API_URL.getMyRecipeUrl(':id'),
}
