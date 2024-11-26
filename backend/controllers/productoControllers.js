const Producto = require('../models/Producto')

const createProductoController =  async ({id, firstName, price, amount, category}) => {
    try {
        const newProducto = await Producto.create({id, firstName, price, amount, category})
        return newProducto
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all productos
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
        const producto = await Producto.findByPk(id)
        if(!producto) {
            return null
        }
        await  producto.destroy()
        return producto

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