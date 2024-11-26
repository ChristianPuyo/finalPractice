import {create} from 'zustand'
import axios from 'axios'

const useProductoStore = create((set)=>({
    productos: [],
    addProducto: async(producto)=>{
        try {
            const response = await axios.post('http://localhost:3001/producto', producto)
            set((state)=>({productos: [...state.productos, response.data]}))
            
        } catch (error) {
            console.log("Error adding product", error.message);
            
        }
    },
    fetchProductos:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/producto')
            set({productos: response.data})
            
        } catch (error) {
            console.log("Error fetching products", error.message)
        }
    },
    deleteProducto: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/producto/${id}`)
            console.log("Producto deleted:",response.data)
            set((state)=>({productos: state.productos.filter((producto)=>producto.id !== id)}
        ))

        } catch (error) {
            console.log("Error deleting producto:",  error.message)

        }
    },
    editProducto: async (id, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:3001/student/${id}`, updatedData);
            console.log("Product updated:", response.data);
            
            set((state) => ({
                productos: state.students.map((producto) =>
                    producto.id === id ? { ...producto, ...updatedData } : producto
                )
            }));
            
        } catch (error) {
            console.log("Error updating product", error.message);
        }
    }
    


}))
export default useProductoStore;