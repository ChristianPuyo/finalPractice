const {Router} = require('express')
const {studentRouters} = require('../routes/studentRoutes')
const {gestionGrupoRouters} = require('../routes/salidaRoutes')
const {courseRouters} = require('../routes/courseRoutes')


const router  = Router()

router.use('/producto',studentRouters)
router.use('/salida',gestionGrupoRouters)
router.use('/almacen',courseRouters)



module.exports = router;
