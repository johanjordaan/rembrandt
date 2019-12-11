export class ImageModel {  
  private _name:string
  private _url:string

  get name():string {
    return this._name
  }

  get url():string {
    return this._url
  }

  constructor(name:string, url:string) {
    this._name = name
    this._url = url
  }
}