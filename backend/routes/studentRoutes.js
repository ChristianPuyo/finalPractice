const {Router} = require('express')

const {createStudentController,getAllStudentsController,updatedStudentByIdController,deletedStudentByIdController} = require('../controlles/studentControllers')
const Student = require('../models/Student')

const studentRouter = Router()

//create new student
studentRouter.post("/",async(req,res)=>{
    const {id, nombre, telefono,correo} = req.body
        try {
            const newStudent = await createStudentController({id, nombre, telefono,correo})
            res.status(201).json(newStudent)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    
})

//agrega todos los estudiantes

studentRouter.get("/", async(req,res)=>{
    try {
        const students = await getAllStudentsController()
        res.status(200).json(students)
    } catch (error) {
            res.status(400).json({error: error.message})
            }
})

//actualizamos los estudiantes por id
studentRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const studentData = req.body
    try {
        const updatedStudent = await updatedStudentByIdController(id, studentData)
        if(!updatedStudent){
            return res.status(404).json({error: "Student not found"})
        }                                
        res.status(200).json(updatedStudent)
    }catch(error){
        res.status(400).json({error: error.message})
    }    
})

studentRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedStudent = await deletedStudentByIdController(id)
        if(!deletedStudent){
            return res.status.apply(404).json({error: "Student not found"})
            }
            res.status(200).json({message: "Student deleted successfully"})
            }catch(error){
                res.status(500).json({error: error.message})
                }
})

module.exports={
    studentRouter
}