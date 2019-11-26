export enum VendorEnum {
  Citadel,
  Vallejo
}

export enum TypeEnum {
  Base,
  Layer,
  Contrast,
  Technical,
  Air,
  Shade,
  Edge,
  Dry,
  Other,
}


export class ColourModel {
  private _vendor:VendorEnum
  private _type:TypeEnum
  private _name:string
  
  get vendor(): VendorEnum {
    return this._vendor 
  }

  get type(): TypeEnum {
    return this._type 
  }

  get name(): string {
    return this._name 
  }

  constructor(vendor:VendorEnum, type:TypeEnum, name:string) {
    this._vendor = vendor
    this._type = type
    this._name = name
  }
}