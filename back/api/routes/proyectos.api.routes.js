import { Router } from 'express'
import * as controllers from '../controllers/controller.api.proyectos.js'
import { validateToken } from '../../middleware/token.validate.middleware.js'
import { validateProyecto } from '../../middleware/proyecto.validate.middleware.js'

const route = Router()

// Todas las rutas requieren autenticación
route.use(validateToken)

route.get('/', controllers.getProyectos)
route.post('/', validateProyecto, controllers.nuevoProyecto)
route.get('/:id', controllers.getProyecto)
route.put('/:id', validateProyecto, controllers.actualizarProyecto)
route.delete('/:id', controllers.borrarProyecto)

export default route
