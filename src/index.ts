import { BaseScene } from './BaseScene'
import { IView } from './view'

//import * as x from './model/static/Colours'

//console.log(x)

export class Scene extends BaseScene {

  public build = ():IView[] => {
    
//    const sm = new SplashModel("Welcome to the BaseScene")
//    const sv = new SplashView(this.app.screen.width,this.app.screen.height,sm)

    return []
  }
  // This should be overwriten in your own scene
  // 
  public gameLoop = (delta:number) => {
    delta = 10
  }  
}

new BaseScene().init()


