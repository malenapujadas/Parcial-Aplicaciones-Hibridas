import express from "express"
import * as controller from "../controller/productos.controller.js"


const router = express.Router()

// Ruta para filtrar productos
// router.get("/productos/filtrar", controller.filtrarProductos);

//traigo productos
router.get( "/", controller.getProductos)

//Ruta a nuevo proyecto
router.get( "/nuevo", controller.formularioNuevoProducto)

//Ruta de los productos con el ID correspondiente
router.get( "/:id", controller.getProductosById)

router.post( "/nuevo", controller.guardarProducto)

//rutas para modificar un producto
router.get("/modificar/:id", controller.formularioModificarProducto)
router.post("/modificar/:id", controller.editarProducto)

//rutas para eliminar un producto
router.get("/eliminar/:id", controller.formularioEliminar)
router.post("/eliminar/:id", controller.eliminarProducto)






export default router

