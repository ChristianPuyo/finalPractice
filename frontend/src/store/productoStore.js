import { create } from 'zustand';
import axios from 'axios';


const useProductoStore = create((set) => ({
    productos: [],
    addProductos: async (producto) => {
        try {
            const response = await axios.post('http://localhost:3000/producto', producto);
            set((state) => ({ productos: [...state.productos, response.data] }))
        } catch (error) {
            console.log("Error agregando prodductos", error.message);
        }
    },
    fetchProductos: async () => {
        try {
            const response = await axios.get('http://localhost:3000/producto')
            set({ productos: response.data })
        } catch (error) {
            console.log("Error al obtener estudiantes", error.message)
        }
    },
    
    deleteStudent: async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/producto/${id}`)
            set((state) => (
                { productos: state.productos.filter(producto => producto.id !== id) }
            ))


        } catch (error) {
            console.log("Error eliminando producto", error.message)

        }
    }


}))

export default useProductoStore;