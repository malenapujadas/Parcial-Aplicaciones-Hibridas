import { readFile } from "node:fs/promises"

//funcion para leer los productos del json
export function getProductos(){
    return readFile("./data/productos.json", "utf-8")
        .then((data) => {
            return JSON.parse(data)
        })
        .catch(() => {
            console.error("No se cargaronlos productos");
            return []
        });
}

//funcion para traer los productos por id
export function getProductosById(id){
    return getProductos().then(productos =>{
        const producto = productos.find( p => p.id == id )
        return producto
    })
}