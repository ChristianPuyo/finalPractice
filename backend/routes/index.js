const {Router} = require('express')
const {studentRouter} = require('../routes/studentRoutes')

const router  = Router()

router.use('/contacto',studentRouter)


module.exports = router;

