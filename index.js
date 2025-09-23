import express from "express"
import ProductosRouter from "./routes/productos.route.js"

const app = express()

app.use("/",express.static("public"))
app.use(express.json())                         // para poder recibir datos en formato json
app.use(express.urlencoded({ extended: true })) // para poder recibir datos en formato urlencoded

//uso rutas
app.use(ProductosRouter)

app.listen(3333, () => {
    console.log("Servidor escuchando en el puerto 3333")
})