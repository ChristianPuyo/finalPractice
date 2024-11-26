const {Router} = require('express')
// const {studentRouter} = require('../routes/studentRoutes')
// const {userRouter} = require('../routes/userRoutes')
// const queryStudentsUsers = require('./queryStudentsUsersRoutes')
const {contactoRouter}= require('../routes/contactoRoutes')
const router  = Router()

// router.use('/student',studentRouter)
// router.use('/user',userRouter)
// router.use('/studentsusers', queryStudentsUsers)
// router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)
router.use('/contacto', contactoRouter)

module.exports = router;
