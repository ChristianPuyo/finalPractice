const Student = require('../models/Student')

const createStudentController = async ({id,nombre,telefono,correo})=>{
    try {
        const newStudent = await Student.create({id,nombre,telefono,correo})
        return newStudent
    } catch (error) {
        throw new Error(error.message)
    }
}//get all students
const getAllStudentsController = async ()=>{
    try {
        const students = await Student.findAll()
        return students
        } catch (error) {
            throw new Error(error.message)
            }
            }

const updatedStudentByIdController = async(id, studentData)=>{
    try{
        const updatedStudent = await Student.findByPk(id)
        if(!updatedStudent){
            return null
            
    }
    await updatedStudent.update(studentData)
    return updatedStudent
    }catch (error){
        throw new Error(error.message)
    }
}
const deletedStudentByIdController = async(id)=>{
    try{
        const student = await Student.findByPk(id)
        if(!student){
            return null
            }
            await student.destroy()
            return student
            }catch (error){
                throw new Error(error.message)
            }
        }
module.exports={
    createStudentController,
    getAllStudentsController,
    updatedStudentByIdController,
    deletedStudentByIdController
}