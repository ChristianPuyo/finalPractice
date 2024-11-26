const Product = require('../models/Producto');

// Crear un producto
const createProductController = async ({ codigo, name, price, quantity, category }) => {
    try {
        const existingProduct = await Product.findOne({ where: { codigo } });
        if (existingProduct) {
            throw new Error('Ya existe un producto con este código.');
        }
        const newProduct = await Product.create({ codigo, name, price, quantity, category });
        return newProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener todos los productos
const getAllProductsController = async () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Buscar producto por código
const getProductByCodeController = async (codigo) => {
    try {
        const product = await Product.findOne({ where: { codigo } });
        if (!product) {
            return null;
        }
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Actualizar producto por código
const updateProductByCodeController = async (codigo, productData) => {
    try {
        const product = await Product.findOne({ where: { codigo } });
        if (!product) {
            return null;
        }
        await product.update(productData);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};


// Eliminar producto por código
const deleteProductByCodeController = async (codigo) => {
    try {
        const product = await Product.findOne({ where: { codigo } });
        if (!product) {
            return null;
        }
        await product.destroy();
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createProductController,
    getAllProductsController,
    getProductByCodeController,
    updateProductByCodeController,
    deleteProductByCodeController 
};
