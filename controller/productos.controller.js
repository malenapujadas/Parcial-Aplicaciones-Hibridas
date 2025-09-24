import { createPage } from "../pages/utils.js"
import * as services from "../services/productos.services.js"
import * as views from "../views/productos.view.js"

export function getProductos(req, res){
    services.getProductos({eliminados: true})
        .then( (productos) => res.send(views.crearListadoProductos(productos)) )
}

export function getProductosById(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then(producto => res.send(views.crearDetalleProducto(producto)) )
} 

export function formularioNuevoProducto(req, res){
    res.send(views.formularioNuevoProducto())
}

export function guardarProducto(req, res){
    const producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tecnologias: req.body.tecnologias
    }
    services.guardarProducto(producto)
    .then(() => res.send(createPage("Producto Creado", `<p>Nombre: ${producto.nombre} - Descrpicion: ${producto.descripcion} - Tecnologias usadas: ${producto.tecnologias}</p>`)))
}




export function formularioModificarProducto(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then( producto => res.send( views.formularioModificarProducto(producto) ) )
} 

export function editarProducto(req, res){
    const id = req.params.id
    const producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tecnologias: req.body.tecnologias
    }
    services.editarProducto( id, producto )
    .then(producto => res.send(views.crearDetalleProducto(producto)))
    .catch(err => res.send(views.crearDetalleProducto()))
}


//funcion para eliminar
export function formularioEliminar(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then( producto => res.send( views.formularioEliminar(producto) ) )
}

export function eliminarProducto(req, res){
    const id = req.params.id
    services.eliminarProducto(id)
    .then(id => res.send(views.eliminacionExito(id)))
    
}
