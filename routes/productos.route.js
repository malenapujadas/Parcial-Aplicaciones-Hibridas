import express from "express"
import * as controller from "../controller/productos.controller.js"


const router = express.Router()

//traigo productos
router.get( "/productos", controller.getProductos)

//Ruta de los productos con el ID correspondiente
router.get( "/productos/:id", controller.getProductosById)

export default router

