const {Router} = require('express')

const {productRouter} = require('../routes/productoRoutes')



const router  = Router()

// router.use('/student',studentRouter)
// router.use('/user',userRouter)
// router.use('/studentsusers', queryStudentsUsers)
//router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)
router.use('/producto', productRouter)


module.exports = router;
