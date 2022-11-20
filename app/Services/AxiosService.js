import { SitesController } from "../Controllers/SitesController.js"

export const SandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  setTimeout: 8000
})


