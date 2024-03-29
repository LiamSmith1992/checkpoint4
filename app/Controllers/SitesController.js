import { appState } from "../AppState.js"
import { Clock } from "../Models/clock.js"
import { sitesService } from "../Services/SitesService.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPicture() {
  let bgImage = appState.backgroundImg
  document.querySelector('body').style.backgroundImage = `url(${bgImage.imgUrl})`
  // setHTML('details', bgImage.DetailsTemplate)
}


function _drawQuote() {
  let quote = appState.quote
  setHTML('details', quote.QuoteTemplate)
}

function _drawTemp() {

  console.log(appState.temp, 'draw temp')
  let temp = appState.temp
  if (temp.isFahrenheit == true) {
    setHTML('weather', temp.FahrenheitTemplate)
    console.log("Fahrenheit", temp.FahrenheitTemplate)
  } else {

    setHTML('weather', temp.CelsiusTemplate)
    console.log("Celsius", temp.CelsiusTemplate)
  }
}

function _drawClock() {
  let time = appState.time
  time = new Clock
  setHTML('clock', time.ClockTemplate)
  console.log(appState.time)

}

export class SitesController {

  constructor() {
    // console.log('were live from controller')
    this.getBackgroundImage()
    this.getQuote()
    this.getWeather()
    setInterval(_drawClock, 500)


    appState.on('backgroundImg', _drawPicture)
    appState.on('quote', _drawQuote)
    appState.on('temp', _drawTemp)
    appState.on('temp',)
    _drawClock()

  }


  async getBackgroundImage() {
    try {
      await sitesService.getBackgroundImage()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async getQuote() {
    try {
      await sitesService.getQuote()
    } catch (error) {
      Pop.error(error.message)
    }
  }


  async getWeather() {
    await sitesService.getWeather()
  }

  flipTemp() {
    sitesService.flipTemp()
  }






}