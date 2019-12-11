import { ImageModel } from '../model'
import { RecipeModel } from '../model'
import { ImageRecipeLinksModel } from '../model'


export class ColourScehemModel {  
  private _name:string
  private _images:ImageModel[]
  private _recipes:RecipeModel[]
  private _links:ImageRecipeLinksModel[]

  get name():string {
    return this._name
  }

  get images():ImageModel[] {
    return this._images
  }

  get recipes():RecipeModel[] {
    return this._recipes
  }

  get links():ImageRecipeLinksModel[] {
    return this._links
  }

  constructor(name:string, images:ImageModel[], recipes:RecipeModel[], links:ImageRecipeLinksModel[]) {
    this._name = name
    this._images = images
    this._recipes = recipes
    this._links = links
  }
}