const Producto = require('../models/Productos')

const createProductoController = async ({ id, codigoProducto, nombre, precio, cantidad, categoria }) => {
    try {
        const newProducto = await Producto.create({ id, codigoProducto, nombre, precio, cantidad, categoria })
        return newProducto
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all students
const getAllProductosController = async () => {
    try {
        const Productos = await Producto.getAll()
        return Productos
    } catch (error) {
        throw new Error(error.message)
    }

}

const updateProductoByIdController = async (id, productoData) => {
    try {
        const producto = await Producto.findByPk(id)
        if (!producto) {
            return null
        }
        await producto.update(productoData)
        return producto
    } catch (error) {
        throw new Error(error.message)

    }

}

const deleteProductoByIdController = async (id) => {
    try {
        const producto = await Producto.findByPk(id)
        if (!producto) {
            return null
        }
        await producto.destroy()
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
