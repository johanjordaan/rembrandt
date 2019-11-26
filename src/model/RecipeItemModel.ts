import { ColourModel } from '../model'
 
 
export enum TechniqueEnum {
  Base,
  Layer,
  EdgeHighlight,
  DryBrush,  
} 

export class RecipeItemModel {
  private _colour: ColourModel
  private _technique: TechniqueEnum

  get colour(): ColourModel {
    return this._colour 
  }

  get technique(): TechniqueEnum {
    return this._technique 
  }
    
  constructor(colour:ColourModel,technique:TechniqueEnum) {
    this._colour = colour
    this._technique = technique
  }
};