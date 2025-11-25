import { readFile, writeFile  } from "node:fs/promises"
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://admin:admin@dwn4ap.jj397vb.mongodb.net")
const db = client.db("AH2023CP1")

export async function createUser(usuario){
    client.connect()
    await db.collection("usuarios").insertOne(usuario)
    
    const nuevoUsuario = {...usuario, password: undefined}

    return nuevoUsuario
}