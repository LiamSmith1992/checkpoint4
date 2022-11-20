import { SitesController } from "./Controllers/SitesController.js";


class App {
  sitesController = new SitesController();
}

window["app"] = new App();
