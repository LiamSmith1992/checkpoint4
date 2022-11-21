import { appState } from "../AppState.js"
import { TodoList } from "../Models/TodoList.js"
import { todoListService } from "../Services/TodoListService.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"



function _drawTodoList() {
  debugger
  const todo = appState.todoList
  let template = ''
  todo.forEach(t => template += t.TodoListTemplate)
  setHTML('todo-list', template)
  console.log('drawing')
}






export class TodoListController {

  constructor() {
    appState.on('todoList', _drawTodoList)
    this.getTodoList()


  }



  async createNewTodo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let todoData = getFormData(form)
      Pop.toast('New Todo', 'success')
      form.reset()
      console.log('this is not running')
      await todoListService.createNewTodo(todoData)
    } catch (error) {
      Pop.error(error.message)
      console.log(error)
    }
  }

  async getTodoList() {


    await todoListService.getTodoList()


  }




}