import { appState } from "../AppState.js"
import { todoListService } from "../Services/TodoListService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"



function _drawTodoList() {
  let todo = appState.todoList
  setHTML('todo-list', todo.TodoListTemplate)
  console.log(todo)
}






export class TodoListController {

  constructor() {

    // _drawTodoList()


  }



  async createNewTodo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let todoData = getFormData(form)
      Pop.toast('New Todo', 'success')
      form.reset()
      console.log(todoData)
      await todoListService.createNewTodo(todoData)
    } catch (error) {
      Pop.error(error.message)
      console.log(error)
    }
  }






}