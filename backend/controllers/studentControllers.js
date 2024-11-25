const Student = require('../models/Student')

const createStudentController =  async ({id, firstName, lastName}) => {
    try {
        const newStudent = await Student.Create({lastName})
       
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all students
const getAllStudentsController = async () => {
    try {
        const students =  await Student.getAll()
      

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateStudentByIdController  = async (id, studentData) => {
    try {
        const student = await Student.findByPK(id)
        if(!student) {
            return null
        }
        await student.update(studentData)
        return student
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteStudentByIdController = async(id)=>{
    try {
        const student = await Student.findByPK(id)
        if(!student) {
            return null
        }
        await  student.Destroy()
        return student

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createStudentController,
    getAllStudentsController,
    updateStudentByIdController,
    deleteStudentByIdController
}
