import { appState } from "../AppState.js"
import { TodoList } from "../Models/TodoList.js"
import { todoListService } from "../Services/TodoListService.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"



function _drawTodoList() {

  const todo = appState.todoList
  let template = ''
  todo.forEach(t => template += t.TodoListTemplate)
  setHTML('todo-list', template)
  console.log('drawing')
}



function _drawTotal() {
  const todo = appState.todoList
  let total = 0
  for (let t = 0; t < todo.length; t++) {
    console.log('this is for todo', todo)
    if (todo[t].completed == false) {
      total += 1
      console.log('total', total)
      setHTML('total', total)
    }
  }
  if (total == 0) {
    setText('total', 0)
  }
}




export class TodoListController {

  constructor() {
    appState.on('todoList', _drawTodoList)
    this.getTodoList()
    appState.on('todoList', _drawTotal)

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

  async deleteItem(id) {
    // console.log('deleting', id)
    if (await Pop.confirm('did you do it?'))
      await todoListService.deleteItem(id)
  }


  completeTask() {
    todoListService.completeTask()
  }

}