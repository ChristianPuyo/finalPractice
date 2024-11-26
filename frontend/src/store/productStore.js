import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
    products: [],

    addProduct: async (product) => { // Método para agregar un producto
        try {
            const { nombre, precio, cantidad, categoria } = product; // Extraer solo los campos necesarios
            const response = await axios.post('http://localhost:3001/productos', { nombre, precio, cantidad, categoria });
            set((state) => ({ products: [...state.products, response.data] })); // Actualiza el estado
        } catch (error) {
            console.log('Error adding product', error.message);
        }
    },

    fetchProducts: async () => { // Método para obtener productos
        try {
            const response = await axios.get('http://localhost:3001/productos');
            set({ products: response.data });
        } catch (error) {
            console.log('Error fetching products', error.message);
        }
    },

    deleteProduct: async (id) => { // Método para eliminar un producto
        try {
            const response = await axios.delete(`http://localhost:3001/productos/${id}`); 
            console.log('Producto eliminado:', response.data);
            set((state) => ({ products: state.products.filter(product => product.id !== id) })); // Filtrar por id
        } catch (error) {
            console.log('Error al eliminar producto', error.message);
        }
    },

    updateProduct: async (id, updatedData) => { // Método para actualizar un producto
        try {
            const response = await axios.put(`http://localhost:3001/productos/${id}`, updatedData);
            console.log('Producto actualizado:', response.data);
            set((state) => ({ products: state.products.map((product) => product.id === id ? { ...product, ...response.data } : product) })); // Actualizar por id
        } catch (error) {
            console.log('Error al actualizar producto:', error.message);
        }
    }
}));

export default useProductStore;