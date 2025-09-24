import express from "express"
import ProductosRouter from "./routes/productos.route.js"
import ProductoApiRouter from "./api/routes/productos.api.routes.js"

const app = express()

app.use("/",express.static("public"))
app.use(express.json())                         // para poder recibir datos en formato json
app.use(express.urlencoded({ extended: true })) // para poder recibir datos en formato urlencoded

//uso rutas
app.use("/productos", ProductosRouter)
app.use("/api/productos", ProductoApiRouter)

app.listen(3333, () => {
    console.log("Servidor escuchando en el puerto 3333")
})