const {Router}= require('express')
const {createGestionGrupoController,getAllGestionGruposController, updateGestionGrupoByIdController,deletedGestionGrupoByIdController} = require('../controllers/salidaControllers')
const { GestionGrupo } = require('../models')
const gestionGrupoRouters = Router()
// create nuew student
// post = publicar, get= obtner, put= actualizar y delete= eliminar
gestionGrupoRouters.post("/",async(req, res)=>{
    const {idSalida, idAlmacen,fechaSalida} = req.body
    try {
        const newGestioGrupo = await createGestionGrupoController({idSalida, idAlmacen,fechaSalida})
        // 201 se maneja en servidor que dice que todo salio bien
        res.status(201).json(newGestioGrupo)
    } catch (error) {
        res.status(400).json({error: error. message})       
    }
}) 
// creamo la ruta para ver todos los estudiantes get
gestionGrupoRouters.get("/",async(req,res)=>{
    try {
        const gestionGrupos = await getAllGestionGruposController()
        res.status(200).json(gestionGrupos)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// para actualizar update
gestionGrupoRouters.put("/:idSalida", async(req,res)=>{
    const {idSalida}= req.params
    const gestionGrupoData= req.body
    try {
        const updateGestionGrupo = await updateGestionGrupoByIdController(idSalida, gestionGrupoData)
        if(!updateGestionGrupo){
            return res.status(404).json({error: "GestionGrupo no encontrado"})
        }
        res.status(200).json(updateGestionGrupo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// delete o eliminar

gestionGrupoRouters.delete("/:idSalida", async(req, res)=>{
    const {idSalida} = req.params
    try {
        const deletedestionGrupo = await deletedGestionGrupoByIdController(idSalida)
        if(!deletedestionGrupo){
            return res.status.apply(404).json({error: "GestionGrupo no encontrado"})
        }
        res.status(200).json({message: "GestionGrupo eliminado existozamente"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports={
    gestionGrupoRouters
}