const {Router} = require('express')
const {contactoRouter} = require('../routes/contactoRoutes')
// const {userRouter} = require('../routes/userRoutes')
// const queryStudentsUsers = require('./queryStudentsUsersRoutes')

const router  = Router()

// router.use('/student',studentRouter)
// router.use('/user',userRouter)
router.use('/contacto',contactoRouter)
// router.use('/studentsusers', queryStudentsUsers)
//router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;
