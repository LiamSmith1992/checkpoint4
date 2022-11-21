import { generateId } from "../Utils/generateId.js"



export class TodoList {

  constructor(data) {
    this.id = data.id || generateId()
    this.completed = false || data.complete
    this.description = data.description
    this.user = 'Liam' || ''
  }


  get TodoListTemplate() {
    return `
  <div class="text-dark border-bottom">
    ${this.description}<span class="mdi mdi-trash-can-outline text-danger selectable" name="description"
      onclick="app.todoListController.deleteItem('${this.id}')"></span>
  </div>
  `
  }



}