import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
    products: [],

    // Agregar un producto
    addProduct: async (product) => {
        try {
            const response = await axios.post('http://localhost:3001/producto', product);
            console.log("Producto agregado:", response.data);
            set((state) => ({
                products: [...state.products, response.data],
            }));
        } catch (error) {
            console.error("Error al agregar el producto:", error.message);
        }
    },

    // Obtener todos los productos
    fetchProducts: async () => {
        try {
            const response = await axios.get('http://localhost:3001/producto');
            console.log("Productos obtenidos:", response.data);
            set({ products: response.data });
        } catch (error) {
            console.error("Error al obtener los productos:", error.message);
        }
    },

// Actualizar un producto por código
updateProductByCode: async (codigo, updatedData) => {
    try {
        const response = await axios.put(`http://localhost:3001/producto/${codigo}`, updatedData);
        console.log("Producto actualizado:", response.data);
        set((state) => ({
            products: state.products.map((product) =>
                product.codigo === codigo ? response.data : product
            ),
        }));
        return true; // Agregar un retorno indicando éxito
    } catch (error) {
        console.error("Error al actualizar el producto:", error.message);
        return false; // Retornar false si hay un error
    }
},

   // Eliminar un producto por código
deleteProductByCode: async (codigo) => {
    try {
      const response = await axios.delete(`http://localhost:3001/producto/${codigo}`);
      console.log("Producto eliminado:", response.data);
      set((state) => ({
        products: state.products.filter((product) => product.codigo !== codigo),
      }));
      return true;  // Devuelve true si la eliminación fue exitosa
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
      return false; // Devuelve false si hubo un error
    }
  },
  
}));

export default useProductStore;
