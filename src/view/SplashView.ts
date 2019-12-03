import * as PIXI from 'pixi.js'

import { ISubscriber } from '../utils'
import { SplashModel } from '../model'
import { IView } from '../view'

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 20,
    fill:'white',
    stroke: 'white',
});

export class SplashView implements ISubscriber, IView {
  width:number
  height:number
  model:SplashModel
  constructor(width:number, height:number, model:SplashModel) {
    this.width = width
    this.height = height
    this.model = model
  }

  private _splashContainer:PIXI.Container 
  private _splashText:PIXI.Text
  
  public getGfx() {
    this._splashContainer = new PIXI.Container()
    this._splashText = new PIXI.Text(this.model.currentText, style)    
    this._splashContainer.addChild(this._splashText)

    const onUp = () => {
      this._splashText.text = this.model.nextText()
      this._resize()
    }
    
    this._splashText.interactive = true
    this._splashText.on('pointerup', onUp)

    this._resize()

    return this._splashContainer
  }

  private _resize() {
    this._splashContainer.removeChild(this._splashText)
          
    this._splashContainer.width = this.width
    this._splashContainer.height = this.height
    
    this._splashText.x = (this.width-this._splashText.width)  /2
    this._splashText.y = (this.height-this._splashText.height) /2    
    
    this._splashContainer.addChild(this._splashText)
  }

  public onResize(width:number, height:number) {
    this.width = width
    this.height = height
    this._resize()
  }
  
  public on() {
  }
};


