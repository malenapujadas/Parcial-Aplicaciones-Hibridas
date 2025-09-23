import * as services from "../services/productos.services.js"
import * as views from "../views/productos.view.js"

export function getProductos(req, res){
    services.getProductos()
        .then( (productos) => res.send(views.crearListadoProductos(productos)) )
}

export function getProductosById(req, res){
    const id = req.params.id
    services.getProductos(id)
        .then(producto => res.send(views.crearDetalleProducto(producto)) )
} 