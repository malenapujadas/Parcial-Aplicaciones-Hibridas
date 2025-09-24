import { createPage } from "../pages/utils.js"

export function crearListadoProductos(productos){
    let html = "<h1>Proyectos</h1>"
    html += "<ul>"
    productos.forEach( producto => {
        html += `<li> ${producto.nombre} <a href="/productos/${producto.id}" >Ver</a> | <a href="/productos/modificar/${producto.id}" >Editar</a> | <a href="/productos/eliminar/${producto.id}" >Eliminar</a>  </li>`;
    });
    html += "</ul>";
    return createPage("Productos", html)
}

export function crearDetalleProducto(producto){
    console.log(producto);
    
    let html = ""
        if( producto ){
            console.log(producto);
            html += `<h1>Nombre del proyecto: ${producto.nombre}</h1>`
            html += `<p>Tecnologias utilizadas: ${producto.tecnologias}</p>`
            html += `<p>Descripcion: ${producto.descripcion}</p>`
            html += `<a href="/productos">Volver</a>`
            return createPage(producto.nombre, html) 
        }else{
            return createPage("Error", "<p>Producto no encontrado</p>") 
        }
} 

// vista del formulario

export function formularioNuevoProducto(){
    let html="<form action='/productos/nuevo' method='post'>"
    html += "<input type='text' placeholder='Nombre del Proyecto' name='nombre'/>"
    html += "<input type='text' placeholder='Descripcion del Proyecto' name='descripcion' />"
    html += "<input type='text' placeholder='Tecnologias Usadas'name='tecnologias' />"
    html += "<input type='submit' value='guardar' />"
    html += "</form>"

    return createPage("Nuevo producto", html)
}


export function formularioModificarProducto(producto){
    let html=`<form action='/productos/modificar/${producto.id}' method='post'>`
    html += `<input type='text' placeholder='Nombre del Proyecto' name='nombre' value="${producto.nombre}"/>`
    html += `<input type='text' placeholder='Descripcion del Proyecto' name='descripcion' value="${producto.descripcion}"/>`
    html += `<input type='text' placeholder='Tecnologias Usadas'name='tecnologias' value="${producto.tecnologias}"/>`
    html += "<input type='submit' value='editar' />"
    html += "</form>"

    return createPage("Nuevo producto", html)
}

//funcion para eliminar prod
export function formularioEliminar(producto){
    let html=`<form action='/productos/eliminar/${producto.id}' method='post'>`
    html += `<div>Nombre del Proyecto: ${producto.nombre}</div>`
    html += `<div>Descripcion del Proyecto: ${producto.descripcion}</div>`
    html += `<div>Tecnologias utilizadas: ${producto.tecnologias}</div>`
    html += "<input type='submit' value='Eliminar' />"
    html += "</form>"
    html += `<a href="/productos">Volver</a>`
    return html
}



//vista de se elimino
export function eliminacionExito(id){
    let html = ""
        if( id ){
            html += `<h1>Id: ${id}</h1>`
            html += `<p>Eliminado correctamente</p>`
            html += `<a href="/productos">Volver</a>`
            return createPage("eliminado", html) 
        }else{
            return createPage("Error", "<p>Producto no encontrado</p>") 
        }
}