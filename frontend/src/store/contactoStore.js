import {create} from 'zustand'
import axios from 'axios'

const useContactoStore = create((set)=>({
    contactos: [],
    addContacto: async(contacto)=>{
        try {
            const response = await axios.post('http://localhost:3001/contacto', contacto)
            set((state)=>({contacto: [...state.contactos, response.data]})) // update the state with the new student
        } catch (error) {
            console.log("Error adding user", error.message);
            
        }
    },
    fetchContactos:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/contacto')
            set({contactos:  response.data})

        } catch (error) {
            console.log("Error fetching contactos", error.message)
        }
    },
    deleteContacto: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/contacto/${id}`)
            console.log("contacto deleted:",response.data)
            set((state)=>(
                {contactos: state.contactos.filter(contacto=>contacto.id !== id)}
            ))

        } catch (error) {
            console.log("Error deleting contacto:",  error.message)

        }
    }


}))
export default useContactoStore;