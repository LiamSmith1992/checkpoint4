export class SandboxQuote {

  constructor(data) {
    this.author = data.author
    this.content = data.content
  }

  get QuoteTemplate() {
    return `
<div class="col-6 text-white">
<h4 class="author-header">${this.content}</h4>
<h2 class="author">${this.author}</h2>
`
  }



}