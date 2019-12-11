import { ImageModel } from '../model'
import { RecipeModel } from '../model'

export class ImageRecipeLinksModel {  
  private _image:ImageModel
  private _recipes:RecipeModel[]

  get image():ImageModel {
    return this._image
  }

  get recipe():RecipeModel[] {
    return this._recipes
  }

  constructor(image:ImageModel,recipes:RecipeModel[]) {
    this._image = image
    this._recipes = recipes
    
  }
}