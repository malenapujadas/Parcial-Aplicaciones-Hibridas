import * as service from "../../services/usuarios.service.js"

export function createUser(req, res){
    service.createUser(req.body)
        .then((usuario) => req.status(201).json(usuario))
        .catch(() => res.status(400).json({message:"No se pudo crear"}))
}

export function login(req,res){
    
}