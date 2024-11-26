const {Router} = require('express')
const {studentRouter} = require('../routes/studentRoutes')
const router  = Router()

router.use('/student',studentRouter)



module.exports = router;
