const Producto = require('../models/Producto')

const createProductoController =  async ({id, nombre, precio, cantidad, categoria}) => {
    try {
        const newProducto = await Producto.create({id, nombre, precio, cantidad, categoria})
        return newProducto
       
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all Productos
const getAllProductosController = async () => {
    try {
        const productos =  await Producto.findAll()
        return productos
    } catch (error) {
        throw new Error(error.message)
    }

}

const updateProductoByIdController  = async (id, productoData) => {
    try {
        const producto = await Producto.findByPk(id)
        if(!producto) {
            return null
        }
        await producto.update(productoData)
        return producto
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteProductoByIdController = async(id)=>{
    try {
        const deleteProducto = await Producto.findByPk(id)
        if(!deleteProducto) {
            return null
        }
        await  deleteProducto.destroy()
        return deleteProducto

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createProductoController,
    getAllProductosController,
    updateProductoByIdController,
    deleteProductoByIdController
}
