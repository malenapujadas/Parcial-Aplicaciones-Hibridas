import jwt from "jsonwebtoken";
import {MongoClient, ObjectId} from "mongodb"

const SECRET_KEY = "123456789"

const client = new MongoClient("mongodb+srv://admin:admin@dwn4ap.jj397vb.mongodb.net");
const db = client.db("AH2023CP1");
const tokens = db.collection ("tokens")


export async function createToken (usuario){
    await client.connect()

const token = jwt.sign ({ ...usuario, password: undefined},
    SECRET_KEY,
    {expiresIn: '2h'}

)
//creamos el token
await tokens.updateOne ({usuarioId: usuario._id}, {$set: {usuarioId: usuario._id, token}}) 
    upsert: true
return token
}

export async function validateToken (token){
    await client.connect()
    try{
        const playload = jwt.verify (token, SECRET_KEY)
        const sessionActive = await tokens.findOne ({token: token, usuarioId: new ObjectId 
        (playload._id)})
        if (!sessionActive) throw new Error ("Token invalido")

           if (playload.exp < (new Date ().getTime()/1000)) throw new Error ("Token expirado") 

            return playload
        } catch (error){
            throw new Error ("Token invalido")
    }
}