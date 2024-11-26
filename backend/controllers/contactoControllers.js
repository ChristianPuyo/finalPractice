const Contacto = require('../models/Contacto')

const createContactoController =  async ({id, nombre, celular, correo}) => {
    try {
        const newContacto = await Contacto.create({id, nombre, celular, correo})
        return newContacto
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all students
const getAllContactosController = async () => {
    try {
        const contactos =  await Contacto.findAll()
        return contactos

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateContactoByIdController  = async (id, contactoData) => {
    try {
        const contacto = await Contacto.findByPk(id)
        if(!contacto) {
            return null
        }
        await contacto.update(contactoData)
        return contacto
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteContactoByIdController = async(id)=>{
    try {
        const contacto = await Contacto.findByPk(id)
        if(!contacto) {
            return null
        }
        await  contacto.destroy()
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
