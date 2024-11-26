const GestionGrupo= require('../models/Salida')
const createGestionGrupoController = async({idSalida, idAlmacen,fechaSalida})=>{
    try {
        const newGestioGrupo = await GestionGrupo.create({idSalida, idAlmacen,fechaSalida})
        return newGestioGrupo
    } catch (error) {
        throw new Error(error.message)
    }
}
// optiene aa todos los estudiantes
const getAllGestionGruposController = async () =>{
    try {
        const gestioGrupos = await GestionGrupo.findAll()
        return gestioGrupos
    } catch (error) {
        throw new Error(error.message)
    }
}

// para actualizar
const updateGestionGrupoByIdController = async (idSalida, gestionGrupoData)=>{
    try {
        const gestionGrupo = await GestionGrupo.findByPk(idSalida)
        if(!gestionGrupo){
            return null
        }
        await gestionGrupo.update(gestionGrupoData)
        return gestionGrupo
    } catch (error) {
        throw new Error(error.message)
    }
}
// para eliminar

const deletedGestionGrupoByIdController = async(idSalida)=>{
   try {
    const gestionGrupo= await GestionGrupo.findByPk(idSalida)
    if(!gestionGrupo){
        return null
    }
    await gestionGrupo.destroy()
    return gestionGrupo
   } catch (error) {
    throw new  Error(error.message)
   }
}

module.exports={
    createGestionGrupoController,
    getAllGestionGruposController,
    updateGestionGrupoByIdController,
    deletedGestionGrupoByIdController
}
