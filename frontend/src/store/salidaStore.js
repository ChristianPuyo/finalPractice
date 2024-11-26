import {create} from 'zustand'
import axios from 'axios'  // para hacer peticiones

const useGestionGrupoStore = create((set)=>({
    gestionGrupos: [],
    addGestionGrupo: async(gestiongrupo)=>{
        try {
            const response = await axios.post('http://localhost:3001/salida',gestiongrupo)
            set((state)=>({gestionGrupos: [...state.gestionGrupos, response.data]}))// crea una copia el "..."
        } catch (error) {
            console.log("Error adding gestionGrupos", error.message)
        }
    },
    fetchGestionGrupos: async()=>{
        try {
            const response = await axios.get('http://localhost:3001/salida')
            set({gestionGrupos: response.data})
        } catch (error) {
            console.log("Error fecthing gestionGrupos", error.message)
        }
    },
    deleteGestionGrupo: async(idSalida)=>{
        try {
            const response = await axios.delete(`http://localhost:3001/salida/${idSalida}`)
            console.log("salida delete:",response.data)
            set((state)=>({gestionGrupos: state.gestionGrupos.filter(gestiongrupo=>gestiongrupo.idSalida !== idSalida)})) // filtra todos lo estudiantes actualizados o
        } catch (error) {                                                               // diferentes del id eliminado
            console.log("Error deleting salida:", error.message)
        }
    },
    //____----------Agregado---------------________
    updateGestionGrupo: async (idSalida, updatedData) => {
        try {  // Realiza una solicitud PUT para actualizar el estudiante en el servidor.
            const response = await axios.put(`http://localhost:3001/salida/${idSalida}`, updatedData)
            console.log("salida updated:", response.data)
            // Actualiza el estado localmente, modificando solo el estudiante con el id coincidente.
            set((state) => ({gestionGrupos: state.gestionGrupos.map((gestiongrupo)=> gestiongrupo.idSalida === idSalida ? {...gestiongrupo, ...response.data} : gestiongrupo)})) // actualiza el estudiante en el estado
        } catch (error) {
            console.log("Error updating salida:", error.message)
        }
    }
    
}))

export default useGestionGrupoStore