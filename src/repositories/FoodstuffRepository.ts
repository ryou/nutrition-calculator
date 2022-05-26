import { Success } from '../../shared/types/Result'
import { httpRequest } from '../libs/httpRequest'
import { API_URL } from '../config/url'
import { ApiResponse } from '../../shared/types/ApiResponse'
import { Foodstuff, FoodstuffSummary } from '../types/foodstuff'
import { HttpResult } from '../types'
import getFoodstuffsSchema = ApiResponse.getFoodstuffsSchema

export const FoodstuffRepository = {
  async search(keyword: string): Promise<HttpResult<FoodstuffSummary[]>> {
    const result = await httpRequest({
      method: 'get',
      url: API_URL.getFoodstuffsUrl(),
      params: new URLSearchParams({
        keyword,
      }),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(getFoodstuffsSchema.parse(result.value))
  },

  async find(id: string): Promise<HttpResult<Foodstuff>> {
    const result = await httpRequest({
      method: 'get',
      url: API_URL.getFoodstuffUrl(id),
    })

    if (result.isFailure()) {
      return result
    }

    return new Success(ApiResponse.getFoodstuffSchema.parse(result.value))
  },
}
