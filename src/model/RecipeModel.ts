import { RecipeItemModel } from '../model'

export class RecipeModel {  
  private _items:RecipeItemModel[]

  get items():RecipeItemModel[] {
    return this._items
  }

  constructor(items:RecipeItemModel[]) {
    this._items = items
  }
}