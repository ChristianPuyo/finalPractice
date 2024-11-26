const {Router} =require('express')

const { studentRouter } = require('./studentRoutes');


const router =Router()

router.use('/Student',studentRouter)


module.exports= router;