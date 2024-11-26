import {create} from 'zustand'
import axios from 'axios'

const useContactoStore = create((set)=>({
    contactos: [],
    addContacto: async(contacto)=>{
        try {
            const response = await axios.post('http://localhost:3001/contacto', contacto)
            
        } catch (error) {
            console.log("Error adding user", error.message);
            
        }
    },
    fetchContactos:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/contacto')
            
        } catch (error) {
            console.log("Error fetching students", error.message)
        }
    },
    deleteContacto: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/contacto/${id}`)
            console.log("Contacto deleted:",response.data)
            

        } catch (error) {
            console.log("Error deleting contacto:",  error.message)

        }
    }


}))
export default useContactoStore;