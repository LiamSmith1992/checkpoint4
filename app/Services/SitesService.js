import { appState } from "../AppState.js"
import { SitesController } from "../Controllers/SitesController.js"
import { SandboxQuote } from "../Models/Quote.js"
import { SandboxImg } from "../Models/Site.js"
import { SandboxTemp } from "../Models/Temp.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { setHTML } from "../Utils/Writer.js"
import { SandboxApi } from "./AxiosService.js"




class SitesService {



  async getBackgroundImage() {
    let res = await SandboxApi.get('images')
    // console.log(res.data, 'sandbox image')
    appState.backgroundImg = new SandboxImg(res.data)
    // console.log(appState.backgroundImg, 'appState img')
    // appState.backgroundImg

  }

  async getQuote() {
    let res = await SandboxApi.get('quotes')
    // console.log(res.data, 'quote')
    appState.quote = new SandboxQuote(res.data)
    console.log(appState.quote);
  }


  async getWeather() {
    let res = await SandboxApi.get('weather')
    // console.log(res.data)
    appState.temp = new SandboxTemp(res.data)
    console.log(appState.temp)
    // if (appState.temp.isFahrenheit = true) {
    //   setHTML('weather', FahrenheitTemplate)
    // } else {
    //   setHTML('weather', CelsiusTemplate)
    // }
  }


  flipTemp() {
    let temp = appState.temp
    temp.isFahrenheit = !temp.isFahrenheit
    console.log("After", temp)
    appState.emit('temp')
  }


}





export const sitesService = new SitesService()