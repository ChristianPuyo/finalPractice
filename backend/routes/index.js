const {Router} = require('express')
const {productoRouter} = require('../routes/ProductoRoutes')
// const {userRouter} = require('../routes/userRoutes')
// const queryStudentsUsers = require('./queryStudentsUsersRoutes')

const router  = Router()

router.use('/producto',productoRouter)
// router.use('/user',userRouter)
// router.use('/studentsusers', queryStudentsUsers)
//router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;
