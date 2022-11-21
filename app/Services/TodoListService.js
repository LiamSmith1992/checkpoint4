import { TodoListController } from "../Controllers/TodoListController.js";
import { SandboxApi } from "./AxiosService.js";



class TodoListService {

  async createNewTodo(todoData) {
    const res = await SandboxApi.post('Liam/todos', todoData)
    console.log('create todo', res.data)
  }


}






export const todoListService = new TodoListService()