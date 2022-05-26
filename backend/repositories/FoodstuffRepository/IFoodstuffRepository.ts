import { Foodstuff } from '../../types/foodstuff'

export interface IFoodstuffRepository {
  search(keyword: string): Promise<Foodstuff[]>

  find(id: string): Promise<Foodstuff | undefined>
}
