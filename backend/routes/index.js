const {Router} = require('express')
const {router} = require('./contactosRoutes')
const routers  = Router()

routers.use('/contactos',router)

module.exports = routers;
