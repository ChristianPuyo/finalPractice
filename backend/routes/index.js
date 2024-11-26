const {Router} = require('express')
const {productoRouter} = require('../routes/productoRoutes')


const router  = Router()

router.use('/producto',productoRouter)

//router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;
