import { RecipeModel, RecipeModelData } from '../../types'

export interface IRecipeRepository {
  list(): Promise<RecipeModel[]>

  find(id: string): Promise<RecipeModel | undefined>

  add(data: RecipeModelData): Promise<string>

  edit(id: string, data: RecipeModelData): Promise<void>

  delete(id: string): Promise<void>
}
