const Producto = require('../models/Producto'); // Asegúrate de que el modelo de Producto esté definido correctamente

// Crea un nuevo producto
const createProductController = async ({ nombre, precio, cantidad, categoria }) => {
    try {
        const newProduct = await Producto.create({ nombre, precio, cantidad, categoria });
        return newProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener todos los productos
const getAllProductsController = async () => {
    try {
        const products = await Producto.findAll(); // Obtener todos los productos
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Actualizar un producto por ID
const updatedProductByIdController = async (id, productData) => {
    try {
        const updatedProduct = await Producto.findByPk(id);
        if (!updatedProduct) {
            return null; // Retornar null si no se encuentra el producto
        }
        await updatedProduct.update(productData);
        return updatedProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Eliminar un producto por ID
const deleteProductByIdController = async (id) => {
    try {
        const deletedProduct = await Producto.destroy({
            where: { id: id }
        });

        if (deletedProduct === 0) {
            throw new Error('Producto no encontrado');
        }

        return { message: 'Producto eliminado exitosamente' }; // Mensaje de éxito
    } catch (error) {
        throw new Error(`Error al eliminar el producto: ${error.message}`);
    }
}

module.exports = {
    createProductController,
    getAllProductsController,
    updatedProductByIdController,
    deleteProductByIdController
};