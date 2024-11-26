const { Router } = require('express');
const { 
    createProductController, 
    getAllProductsController, 
    getProductByCodeController, 
    updateProductByCodeController, 
    deleteProductByCodeController 
} = require('../controllers/productoController');

const productRouter = Router();

// Crear un nuevo producto
productRouter.post("/", async (req, res) => {
    const { codigo, name, price, quantity, category } = req.body;
    try {
        const newProduct = await createProductController({ codigo, name, price, quantity, category });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los productos
productRouter.get("/", async (req, res) => {
    try {
        const products = await getAllProductsController();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Buscar producto por código
productRouter.get("/:codigo", async (req, res) => {
    const { codigo } = req.params;
    try {
        const product = await getProductByCodeController(codigo);
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar un producto por código
productRouter.put("/:codigo", async (req, res) => {
    const { codigo } = req.params;
    const productData = req.body;
    try {
        const updatedProduct = await updateProductByCodeController(codigo, productData);
        if (!updatedProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar un producto por código
productRouter.delete("/:codigo", async (req, res) => {
    const { codigo } = req.params;
    try {
        const deletedProduct = await deleteProductByCodeController(codigo);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = {
    productRouter
};
