const { Router } = require('express')
const {createProductoController,
      getAllProductosController,
      updateProductoByIdController,
      deleteProductoByIdController

} = require('../controllers/ProductoControllers')

const productoRouter = Router()

//Create new student 
productoRouter.post("/", async(req, res)=>{
    const {id, nombre, precio, cantidad, categoria} = req.body
    try {
        const newProducto = await createProductoController({id, nombre, precio, cantidad, categoria})
        res.status(201).json(newProducto)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}) 

//Get all students
productoRouter.get("/", async(req, res)=>{
    try {
        const productos =  await getAllProductosController()
        res.status(200).json(productos)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Update student by id
productoRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const productoData = req.body
    try {
        const  updateProducto = await updateProductoByIdController(id, productoData)
        if(!updateProducto){
            return res.status(404).json({error: "Producto not found"})
        }
        res.status(200).json(updateProducto)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Delete student by id
productoRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deleteProducto = await  deleteProductoByIdController(id)
        if(!deleteProducto){
            return res.status(404).json({error: "Producto not found"})
        }
        res.status(200).json({message: "Product deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    productoRouter
}