const contactos = require ('../models/contactos')

const createContactosController = async (id,name,email,Phonenumber) => {
    try {
        const newcontactos = await contactos.create({id,name,email,Phonenumber})
        
    } catch (error) {
        throw new Error(error.message)
    }
}
const getAllContactosController = async (id,name,email,Phonenumber) => {
    try {
        const newcontactos = await contactos.findAll({where:{id,name,email,Phonenumber}})
        
    } catch (error) {
        throw new Error(error.message)
    }
}

const updateContactosByIdController = async (id, contactosData) => {
    try {
        const contactos = await contactos.findByPK(id)
        if(!contactos) {
            return null
        }
        await contactos.update(contactosData)
        return contactos
    } catch (error) {
        throw  new Error(error.message)
    }
}

const deleteContactosByIdController = async(id)=> {
    try {
        const contactos = await contactos.findByPK(id)
        if(!contactos) {
            return null
        }
        await  contactos.Destroy()
        return contactos
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    createContactosController,
    getAllContactosController,
    updateContactosByIdController,
    deleteContactosByIdController
}