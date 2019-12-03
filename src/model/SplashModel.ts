import { Observable } from '../utils'

export class SplashModel  extends Observable {
  private _text: string[]
  private _index: number

  set text(text:string[]) {
    this._text = text
    this._index = 0
    this.publish('change',this)
  }
  
  get currentText():string {
    return this._text[this._index]  
  }
  
  public nextText():string {
    this._index++
    if(this._index>=this._text.length) {
      this._index = 0
    }
    this.publish('change',this)
    return this.currentText
  }
    
  constructor(text:string[]) {
    super()
    this._text = text
    this._index = 0
  }
};