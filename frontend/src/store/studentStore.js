import {create} from 'zustand'
import axios from 'axios'

const usecontactStore = create((set) => ({
    contacts: [],
    addcontact: async (contact) => {
        try {
            const response = await axios.post("http://localhost:3001/contactos", contact);
            set((state) => ({ contacts: [...state.contacts, response.data] })); 
        } catch (error) {
            console.log("Error adding user", error.response?.data || error.message);
        }
    },
    fetchcontacts: async () => {
        try {
            const response = await axios.get('http://localhost:3001/contactos');
            set({ contacts: response.data });
        } catch (error) {
            console.log("Error fetching contacts", error.message);
        }
    },
    deletecontact: async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/contactos/${id}`);
            console.log("Contact deleted:", response.data);
            set((state) => ({
                contacts: state.contacts.filter(contact => contact.id !== id)
            }));
        } catch (error) {
            console.log("Error deleting contact:", error.message);
        }
    },
    editcontact: async (id, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:3001/contactos/${id}`, updatedData);
            set((state) => ({
                contacts: state.contacts.map(contact => 
                    contact.id === id ? { ...contact, ...response.data } : contact
                )
            }));
        } catch (error) {
            console.log("Error editing contact:", error.response?.data || error.message);
        }
    },
}));

export default usecontactStore;