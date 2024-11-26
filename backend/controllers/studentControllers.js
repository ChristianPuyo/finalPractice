const Student= require('../models/Student')
const createStudentController = async({idProducto,nombre,precio,categoria})=>{
    try {
        const newStudent = await Student.create({idProducto,nombre,precio,categoria})
        return newStudent
    } catch (error) {
        throw new Error(error.message)
    }
}
// optiene aa todos los estudiantes
const getAllStudentsController = async () =>{
    try {
        const students = await Student.findAll()
        return students
    } catch (error) {
        throw new Error(error.message)
    }
}

// para actualizar
const updateStudentByIdController = async (idProducto, studentData)=>{
    try {
        const student = await Student.findByPk(idProducto)
        if(!student){
            return null
        }
        await student.update(studentData)
        return student
    } catch (error) {
        throw new Error(error.message)
    }
}
// para eliminar

const deletedStudentByIdController = async(idProducto)=>{
   try {
    const student= await Student.findByPk(idProducto)
    if(!student){
        return null
    }
    await student.destroy()
    return student
   } catch (error) {
    throw new  Error(error.message)
   }
}

module.exports={
    createStudentController,
    getAllStudentsController,
    updateStudentByIdController,
    deletedStudentByIdController
}
