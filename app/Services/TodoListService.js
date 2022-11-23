import { appState } from "../AppState.js";
import { TodoListController } from "../Controllers/TodoListController.js";
import { TodoList } from "../Models/TodoList.js";
import { SandboxApi } from "./AxiosService.js";



class TodoListService {

  async createNewTodo(todoData) {
    const res = await SandboxApi.post('Liam/todos', todoData)
    console.log('create todo', res.data)
    appState.todoList = [...appState.todoList, new TodoList(res.data)]
    console.log('app state todo', appState.todoList)
  }

  async getTodoList() {
    const res = await SandboxApi.get('Liam/todos')

    appState.todoList = res.data.map(t => new TodoList(t))
    console.log('this is getting', appState.todoList)
  }

  async deleteItem(id) {
    const res = await SandboxApi.delete('Liam/todos/' + id)
    console.log('deleting', res.data)
    appState.todoList = appState.todoList.filter(t => t.id != id)
  }

  async completeTask(id) {
    debugger
    let checked = appState.todoList.find(t => t.id == id)
    checked.completed = !checked.completed
    const res = await SandboxApi.put('Liam/todos/' + id, checked)
    console.log('completed', checked)
    appState.emit('todoList')
  }



  // let temp = appState.temp
  //     temp.isFahrenheit = !temp.isFahrenheit
  //     console.log("After", temp)
  //     appState.emit('temp')
}






export const todoListService = new TodoListService()