import { create } from 'zustand';
import axios from 'axios';

const useContactStore = create((set) => ({
  contactos: [],
  addContacto: async (contacto) => {
    try {
      const response = await axios.post('http://localhost:3001/api/contactos', contacto);
      set((state) => ({
        contactos: [...state.contactos, response.data],
      }));
    } catch (error) {
      console.log("Error al agregar contacto", error.message);
    }
  },
  fetchContactos: async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/contactos');
      set({ contactos: response.data });
    } catch (error) {
      console.log("Error al obtener contactos", error.message);
    }
  },

  deleteContacto: async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/contactos/${id}`);
      set((state) => ({
        contactos: state.contactos.filter(contacto => contacto.id !== id),
      }));
      console.log("Contacto eliminado:", response.data);
    } catch (error) {
      console.log("Error al eliminar contacto:", error.message);
    }
  },
}));

export default useContactStore;
