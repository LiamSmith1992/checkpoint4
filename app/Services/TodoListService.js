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





}






export const todoListService = new TodoListService()