import { Observable } from '../utils'

export class SplashModel  extends Observable{
  private _text: string

  get text(): string {
    return this._text 
  }
  set text(text:string)  {
    this._text = text
    this.publish('change',this)
  }
    
  constructor(text:string) {
    super()
    this._text = text
  }
};