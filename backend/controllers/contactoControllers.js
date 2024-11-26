const Contacto = require('../models/Contacto')

const createContactoController =  async ({id, firstName, lastName, telefono, correo}) => {
    try {
        const newContacto = await Contacto.Create({id,firstName,lastName,telefono,correo})
        return newContacto
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all students
const getAllContactoController = async () => {
    try {
        const Contactos =  await Contacto.getAll()
        return Contactos

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateContactoByIdController  = async (id, contactoData) => {
    try {
        const contacto = await Contacto.findByPK(id)
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
        const contacto = await Contacto.findByPK(id)
        if(!contacto) {
            return null
        }
        await  contacto.Destroy()
        return contacto

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createContactoController,
    getAllContactoController,
    updateContactoByIdController,
    deleteContactoByIdController
}
