import { createPage } from "../pages/utils.js"

export function crearListadoProductos(productos){
    let html = "<h1>Productos</h1>"
    html += "<ul>"
    productos.forEach( producto => {
        html += `<li> ${producto.modelo} <a href="/productos/${producto.id}" >Ver</a> </li>`
    });
    html += "</ul>";
    return createPage("Productos", html)
}

export function crearDetalleProducto(producto){
    let html = ""
        if( producto ){
            html += `<h1>Modelo: ${producto.modelo}</h1>`
            html += `<p>Precio: ${producto.precio}</p>`
            html += `<p>Marca: ${producto.marca}</p>`
            html += `<a href="/productos">Volver</a>`
            return createPage(producto.modelo, html) 
        }else{
            return createPage("Error", "<p>Producto no encontrado</p>") 
        }
}