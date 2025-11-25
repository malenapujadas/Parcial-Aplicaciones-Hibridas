import { Router } from "express";
import * as controller from '../controller/controller.api.usuarios.js'

const route = Router()

route.post("/", controller.createUser)
route.post("/login", controller.login)

export default route