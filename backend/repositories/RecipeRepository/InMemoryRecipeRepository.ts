import { v4 as uuid } from 'uuid'
import { IRecipeRepository } from './IRecipeRepository'
import { RecipeModel, RecipeModelData } from '../../types'

export class InMemoryRecipeRepository implements IRecipeRepository {
  constructor(private recipes: Record<string, RecipeModelData> = {}) {}

  async list(): Promise<RecipeModel[]> {
    return Object.entries(this.recipes).map(([key, value]) => {
      return {
        id: key,
        data: value,
      }
    })
  }

  async find(id: string): Promise<RecipeModel | undefined> {
    const recipeModelData = this.recipes[id]

    if (recipeModelData === undefined) {
      return undefined
    }

    return {
      id,
      data: recipeModelData,
    }
  }

  async add(data: RecipeModelData): Promise<string> {
    const id = uuid()

    if (this.recipes[id] !== undefined) {
      throw new Error(
        `すでに存在するID: ${id} にデータが登録されようとしました`
      )
    }

    this.recipes[id] = data

    return id
  }

  async edit(id: string, data: RecipeModelData): Promise<void> {
    if (this.recipes[id] === undefined) {
      throw new Error(`存在しないID: ${id} のデータが修正されようとしました`)
    }

    this.recipes[id] = data
  }

  async delete(id: string): Promise<void> {
    if (this.recipes[id] === undefined) {
      throw new Error(`存在しないID: ${id} のデータが削除されようとしました`)
    }

    delete this.recipes[id]
  }
}
