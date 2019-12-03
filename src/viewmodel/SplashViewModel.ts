import { IViewModel } from '../viewmodel'
import { SplashModel } from '../model'
import { SplashView } from '../view'

export class SplashViewModel implements IViewModel {
  private _width:number
  private _height:number
  private _model:SplashModel
  private _view:SplashView
  
  get width():number {
    return this._width
  }

  get height():number {
    return this._height
  }

  get model():SplashModel {
    return this._model
  }

  get view():SplashView {
    return this._view
  }
  
  public onResize(width:number, height:number) {
    this._view.onResize(width,height)
  }
  
  public getGfx() {
    return this._view.getGfx()
  }
  
  constructor(width:number,height:number) {
    this._width = width
    this._height = height
    
    this._model = new SplashModel([])
    this._view = new SplashView(this._width,this._height,this._model)
  }
};


