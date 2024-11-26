const { Router } = require('express')
const {createContactoController,
       getAllContactoController,
       updateContactoByIdController,
       deleteContactoByIdController

} = require('../controllers/contactoControllers')

const { Contacto } = require('../models')

const contactoRouter = Router()

//Create new student 
contactoRouter.post("/", async(req, res)=>{
    const {id, firstName, lastName, telefono, correo} = req.body
    try {
        const newContacto = await createContactoController({id, firstName, lastName, telefono, correo})
        res.status(201).json(newContacto)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}) 

//Get all students
contactoRouter.get("/", async(req, res)=>{
    try {
        const contactos =  await getAllContactoController()
        res.status(200).json(contactos)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Update student by id
contactoRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const contactoData = req.body
    try {
        const  updatedContacto = await updateContactoByIdController(id, contactoData)
        if(!updatedContacto){
            return res.status(404).json({error: "Contacto no encontrado"})
        }
        res.status(200).json(updatedContacto)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Delete student by id
contactoRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedContacto = await  deleteContactoByIdController(id)
        if(!deletedContacto){
            return res.status(404).json({error: "Contacto no encontrado"})
        }
        res.status(200).json({message: "Contacto eliminado satisfactoriamente"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    contactoRouter
}