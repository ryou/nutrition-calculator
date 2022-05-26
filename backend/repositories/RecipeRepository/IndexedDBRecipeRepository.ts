import Dexie, { Table } from 'dexie'
import { v4 as uuid } from 'uuid'
import { IRecipeRepository } from './IRecipeRepository'
import { RecipeModel, RecipeModelData } from '../../types'

class MyRecipeDatabase extends Dexie {
  public recipes!: Table<RecipeModel, string>

  public constructor() {
    super('MyRecipeDatabase')
    this.version(3).stores({
      recipes: '&id',
    })
  }
}

export class IndexedDBRecipeRepository implements IRecipeRepository {
  private db: MyRecipeDatabase

  constructor() {
    this.db = new MyRecipeDatabase()
  }

  async list(): Promise<RecipeModel[]> {
    return this.db.recipes.toArray()
  }

  async find(id: string): Promise<RecipeModel | undefined> {
    return this.db.recipes.get(id)
  }

  async add(data: RecipeModelData): Promise<string> {
    const id = uuid()

    this.db.recipes.add({
      id,
      data,
    })

    return id
  }

  async edit(id: string, data: RecipeModelData): Promise<void> {
    this.db.recipes.put({
      id,
      data,
    })
  }

  async delete(id: string): Promise<void> {
    this.db.recipes.delete(id)
  }
}
