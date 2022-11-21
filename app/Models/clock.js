


export class Clock {
  constructor() {

    this.time = new Date()
  }


  get ClockTemplate() {
    return `
    <div class="">${this.time.toLocaleString()} </div>
    `
  }



}
