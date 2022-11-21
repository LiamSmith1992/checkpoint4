import { appState } from "../AppState.js"




export class SandboxTemp {
  constructor(data) {
    this.temp = data.main.temp
    this.fahrenheit = Math.round((data.main.temp - 273.15) * 9 / 5 + 32)
    this.celsius = Math.round(data.main.temp - 273.15)
    this.isFahrenheit = true

  }

  get FahrenheitTemplate() {
    return `
    <div class="  text-white">
    <h5 class="selectable" onclick="app.sitesController.flipTemp()">${this.fahrenheit} F</h5>
      </div>
    `
  }
  get CelsiusTemplate() {
    return `
    <div class="text-white">
    <h5 class="selectable" onclick="app.sitesController.flipTemp()">${this.celsius} C</h5>
      </div>
    `
  }

}





// flipBool(){
//   appState.weather.isFahrenheit = !appState.weater.isFahrenheit
// }

// start w/ drawing fahrenheit.. isfahrenheit defaults to true
// onclick= calls a fn in the controller, which then calls a fn in the service
// service will handle flipping the bool
// if isfahrenheit == false, draw celsius; if isFahrenheit == true draw fahrenheit
// /

// get FahrenheitTemplate(){
//   div...

// }

// get celciusTemplate(){
//   use same id as fahrenheit
// }