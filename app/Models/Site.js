


export class SandboxImg {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.author = data.author
    this.hours = new Date
  }


  get clockTemplate() {
    return `
  <div class="digital-clock">${this.hours.getHours()}:00:00</div>
  `
  }








}
