import * as PIXI from 'pixi.js'

import { each } from 'lodash'

import { Observable } from './utils'
import { IViewModel, SplashViewModel } from './viewmodel'

export class BaseScene extends Observable {
  app:PIXI.Application   
  viewmodels:IViewModel[]
  
  // This should be overriden in your own scene
  // 
  public build = ():IViewModel[] => {
    
    const vm = new SplashViewModel(this.app.screen.width,this.app.screen.height)
    vm.model.text = ["[Click here]","Welcome to the BaseScene"]

    return [vm]
  }
  // This should be overwriten in your own scene
  // 
  //public gameLoop = (delta:number) => {
  //  delta = 10
  //}
  
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
    //this.app.ticker.add(delta => this.gameLoop(delta))

    window.onresize = () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
      each(this.viewmodels,(v)=>v.onResize(window.innerWidth, window.innerHeight))
    }

    this.viewmodels = this.build()
    each(this.viewmodels,(v)=>this.app.stage.addChild(v.getGfx()))
  
    window.onload = () => {
      document.body.appendChild(this.app.view)
    }
  }
}