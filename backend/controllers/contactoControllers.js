const { Contacto } = require('../models')
const Student = require('../models/Contacto')

const createContactoController = async({id,name,telefono,correo}) => {
    try {
        const newContacto = await Contacto.create({id,name,telefono,correo})
        return newContacto
    } catch (error) {
        throw new Error(error.message)
    }
}
//get all contacto

const getAllContactosController = async() => {
    try {
        const contactos = await Contacto.findAll()
        return contactos
    } catch (error) {
        throw new Error(error.message)
    }

}

const updateContactoByIdController = async (id,contactoDate)=>{
    try {
        const updatedContacto = await Contacto.findByPk(id)
        if(!updatedContacto){
            return null
        }
        await updatedContacto.update(contactoDate)
        return updatedContacto
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteContactoByIdController = async(id)=>{
    try {
        const contacto= await Contacto.findByPk(id)
        if(!contacto){
            return null
        }
        await contacto.destroy()
        return contacto
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = {
    createContactoController,
    getAllContactosController,
    updateContactoByIdController,
    deleteContactoByIdController
}