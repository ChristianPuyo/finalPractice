const Course= require('../models/Almacen')
//const Docente = require('../models/Docente');
//const PlanEstudio = require('../models/PlanEstudio');



const createCourseController = async({idAlmacen,idProducto,fechaIngreso,cantidad})=>{
    try {
        const newCourse = await Course.create({idAlmacen,idProducto,fechaIngreso,cantidad})
        return newCourse
    } catch (error) {
        throw new Error(error.message)
    }
}
// optiene aa todos los estudiantes
const getAllCourseController = async () =>{
    try {
        const Courses = await Course.findAll()
        return Courses
    } catch (error) {
        throw new Error(error.message)
    }
}
const updateCourseByIdController = async (idAlmacen, courseData)=>{
    try {
        const course = await Course.findByPk(idAlmacen)
        if(!course){
            return null
        }
        await course.update(courseData)
        return course
    } catch (error) {
        throw new Error(error.message)
    }
}
const deletedCourseByIdController = async(idAlmacen)=>{
    try {
     const course= await Course.findByPk(idAlmacen)
     if(!course){
         return null
     }
     await course.destroy()
     return course
    } catch (error) {
     throw new  Error(error.message)
    }
 }
 

module.exports={
    createCourseController,
    getAllCourseController,
    updateCourseByIdController,
    deletedCourseByIdController
}
