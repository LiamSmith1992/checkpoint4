import { generateId } from "../Utils/generateId.js"



export class TodoList {

  constructor(data) {
    this.id = generateId()
    this.completed = false
    this.description = data.description
    this.user = 'Liam'
  }


  get TodoListTemplate() {
    return `
  <div class="text-center col-3 card ">
  <div class="opacity-75 text-dark border-bottom">incomplete tasks</div>
  <div class="text-dark">

    this is todo<span class="mdi mdi-trash-can-outline text-danger selectable" name="description"
      onclick="app.todoListController.deleteItem()"></span>
  </div>

  <form onsubmit="app.todoListController.createNewTodo()">
    <div class="form me-3 ms-3 ">
      <input required type="text" class="form-control" id="description" placeholder="New Task" name="description"
        value="">
    </div>
    <button class="btn btn-info mdi">submit</button>
  </form>
</div>
  `
  }



}