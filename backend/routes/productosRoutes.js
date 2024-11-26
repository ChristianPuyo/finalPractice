const { Router } = require('express')
const {createProductoController,
    getAllProductosController,
    updateProductoByIdController,
    deleteProductoByIdController


} = require('../controllers/ProductosControllers')

const productoRouter = Router()

//Create new producto 
productoRouter.post("/", async (req, res) => {
    const {id, codigoProducto, nombre, precio, cantidad, categoria } = req.body;
    try {
        const newProducto = await createProductoController({id, codigoProducto, nombre, precio, cantidad, categoria });
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Get all productos
productoRouter.get("/", async(req, res)=>{
    try {
        const productos =  await getAllProductosController()
        res.status(200).json(productos)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Update producto by id
productoRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const productoData = req.body
    try {
        const  updatedProducto = await updateProductoByIdController(id, productoData)
        if(!updatedProducto){
            return res.status(404).json({error: "Producto not found"})
        }
        res.status(200).json(updatedProducto)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


//Delete producto by id
productoRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedProducto = await  deleteProductoByIdController(id)
        if(!deletedProducto){
            return res.status(404).json({error: "Producto not found"})
        }
        res.status(200).json({message: "Producto deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    productoRouter
}