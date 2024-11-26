// routes/productRouter.js
const { Router } = require('express');
const {
    createProductController,
    getAllProductsController,
    updateProductByIdController,
    deleteProductByIdController
} = require('../controllers/productoControllers');

const productRouter = Router();

// Create a new product
productRouter.post("/", async (req, res) => {
    const { nombre, precio, cantidad, categoria } = req.body; // 'id' is auto-generated
    try {
        const newProduct = await createProductController({ nombre, precio, cantidad, categoria });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all products
productRouter.get("/", async (req, res) => {
    try {
        const products = await getAllProductsController();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a product by ID
productRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const productData = req.body;

    try {
        const updatedProduct = await updateProductByIdController(id, productData);
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a product by ID
productRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await deleteProductByIdController(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = productRouter;