import {create} from 'zustand'
import axios from 'axios'

const useContactoStore = create((set)=>({
    contactos: [],
    addContacto: async(contacto)=>{
        try {
            const response = await axios.post('http://localhost:3001/contacto', contacto)
            set((state)=>({contactos: [...state.contactos, response.data]}))
        } catch (error) {
            console.log("Error adding user", error.message);
            
        }
    },
    fetchContactos:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/contacto')
            set({contactos: response.data})
        } catch (error) {
            console.log("Error fetching contactos", error.message)
        }
    },
    deleteContacto: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/contacto/${id}`)
            console.log("Contacto deleted:",response.data)
            set((state)=>({contactos: state.contactos.filter(contactos=>contactos.id !==id)}))

        } catch (error) {
            console.log("Error deleting student:",  error.message)

        }
    }


}))
export default useContactoStore;