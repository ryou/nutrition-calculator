import { IFoodstuffRepository } from './IFoodstuffRepository'
import { Foodstuff } from '../../types/foodstuff'

const filterFoodstuffListByKeyword = (
  keyword: string,
  foodstuffList: Foodstuff[]
) => {
  if (keyword === '') return foodstuffList

  return foodstuffList.filter((foodstuff) => {
    const names = foodstuff.subNames.concat([foodstuff.name])
    return names.some((name) => name.includes(keyword))
  })
}

export class InMemoryFoodstuffRepository implements IFoodstuffRepository {
  public foodstuffs: Foodstuff[]

  // @storybook/reactの6.4.22において、引数プロパティを使用すると正常に動作しなくなる不具合があったので、引数プロパティを使用せず実装
  constructor(foodstuffs: Foodstuff[] = []) {
    this.foodstuffs = foodstuffs
  }

  async search(keyword: string): Promise<Foodstuff[]> {
    return filterFoodstuffListByKeyword(keyword, [...this.foodstuffs])
  }

  async find(id: string): Promise<Foodstuff | undefined> {
    return this.foodstuffs.find((foodstuff) => foodstuff.id === id)
  }
}
