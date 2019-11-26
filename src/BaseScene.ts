import * as PIXI from 'pixi.js'

import { each } from 'lodash'

import { Observable } from './utils'
import { IView, SplashView } from './view'
import { SplashModel } from './model'

export class BaseScene extends Observable {
  app:PIXI.Application   
  views:IView[]
  
  // This should be overriden in your own scene
  // 
  public build = ():IView[] => {
    
    const sm = new SplashModel("Welcome to the BaseScene")
    const sv = new SplashView(this.app.screen.width,this.app.screen.height,sm)

    return [sv]
  }
  // This should be overwriten in your own scene
  // 
  public gameLoop = (delta:number) => {
    delta = 10
  }
  
  public init = () => {
    if(!PIXI.utils.isWebGLSupported()){
      PIXI.utils.sayHello("canvas")
    } else {
      PIXI.utils.sayHello("WebGL")
    }

    //Create a Pixi Application
    this.app = new PIXI.Application({width: window.innerWidth, height: window.innerWidth})
    this.app.renderer.view.style.position = "absolute"
    this.app.renderer.view.style.display = "block"
    this.app.renderer.autoDensity = true
    this.app.renderer.resize(window.innerWidth, window.innerHeight)
    this.app.ticker.add(delta => this.gameLoop(delta))

    window.onresize = () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
      each(this.views,(v)=>v.onResize(window.innerWidth, window.innerHeight))
    }

    this.views = this.build()
    
    each(this.views,(v)=>this.app.stage.addChild(v.getGfx()))
  
    window.onload = () => {
      document.body.appendChild(this.app.view)
    }
  }
}