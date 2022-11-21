import { SitesController } from "./Controllers/SitesController.js";
import { TodoListController } from "./Controllers/TodoListController.js";


class App {
  sitesController = new SitesController();
  todoListController = new TodoListController();
}

window["app"] = new App();
