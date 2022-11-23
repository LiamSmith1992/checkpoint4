import { generateId } from "../Utils/generateId.js"



export class TodoList {

  constructor(data) {
    this.id = data.id || generateId()
    this.completed = data.completed || false
    this.description = data.description
    this.user = 'Liam' || ''
  }


  get TodoListTemplate() {
    return `
    <div class="text-dark border-bottom">
    <div class="form-check">
    <input id="checkbox" type="checkbox" ${this.completed ? 'checked' : 'unchecked'} onchange="app.todoListController.completeTask('${this.id}')"/>
    ${this.description}<span class="mdi mdi-trash-can-outline text-danger selectable" name="description"
    onclick="app.todoListController.deleteItem('${this.id}')"></span>
    </label>
    </div>
    </div>
    `
  }



}
    // <input class="form-check-input checker" type="checkbox" value="${this.completed}" id="flexCheckDefault" toggle="app.todoListController.completeTask()">
    // <label class="form-check-label" for="flexCheckDefault">