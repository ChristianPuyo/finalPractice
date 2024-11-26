import {create} from 'zustand'
import axios from 'axios'

const useProductoStore = create((set)=>({
    productos: [],
    addProducto: async(producto)=>{
        try {
            const response = await axios.post('http://localhost:3009/producto', producto)
            set((state)=>({productos: [...state.productos, response.data]})) // update the state with the new student
        } catch (error) {
            console.log("Error adding producto", error.message);
            
        }
    },
    fetchProductos:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3009/producto')
            set({productos:  response.data})

        } catch (error) {
            console.log("Error fetching productos", error.message)
        }
    },
    deleteProducto: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3009/producto/${id}`)
            console.log("Producto deleted:",response.data)
            set((state)=>(
                {productos: state.productos.filter(producto=>producto.id !== id)}
            ))

        } catch (error) {
            console.log("Error deleting producto:",  error.message)

        }
    }


}))
export default useProductoStore;