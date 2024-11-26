const { Router } = require('express')
const {createContactoController,
       getAllContactosController,
       updateContactoByIdController,
       deleteContactoByIdController

} = require('../controllers/contactoControllers')

const contactoRouter = Router()

//Create new contacto
contactoRouter.post("/", async(req, res)=>{
    const {id, name, telefono, correo} = req.body
    try {
        const newContacto = await createContactoController({id, name, telefono, correo})
        res.status(201).json(newContacto)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}) 

//Get all contacto
contactoRouter.get("/", async(req, res)=>{
    try {
        const contactos =  await getAllContactosController()
        res.status(200).json(contactos)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Update contacto by id
contactoRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const contactoData = req.body
    try {
        const  updatedContacto = await updateContactoByIdController(id, contactoData)
        if(!updatedContacto){
            return res.status(404).json({error: "Student not found"})
        }
        res.status(200).json(updatedContacto)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Delete contacto by id
contactoRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deleteContacto = await  deleteContactoByIdController(id)
        if(!deletedStudent){
            return res.status(404).json({error: "Contacto not found"})
        }
        res.status(200).json({message: "Contacto deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    contactoRouter
}