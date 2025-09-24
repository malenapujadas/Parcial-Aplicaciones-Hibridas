import { readFile, writeFile  } from "node:fs/promises"
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://admin:admin@dwn4ap.jj397vb.mongodb.net")
const db = client.db("AH2023CP1")

//funcion para leer los productos del json
export async function getProductos(filter={}){
    const filterMongo = {}

    if(filter.nombre != undefined){
        filterMongo.nombre = {$eq: filter.nombre}
    }
    
    await client.connect()
    return db.collection("Projects").find(filterMongo).toArray()
}

//funcion para traer los productos por id
export async function getProductosById(_id){
    await client.connect()
    return db.collection("Projects").findOne({_id: new ObjectId(_id)})
}

export async function guardarProducto(producto){
    await client.connect()
    return db.collection("Projects").insertOne(producto)
}


export async function reemplazarProducto(_id, producto){
    await client.connect()
    return db.collection("Projects").replaceOne({_id: new ObjectId(_id)}, producto)
}

//eliminar prod
export function eliminarProducto(_id){
    return db.collection("Projects").deleteOne({_id: new ObjectId(_id)})
}

export function editarProducto(_id, producto){
    return db.collection("Projects").updateOne({_id: new ObjectId(_id)}, {$set: producto})
}