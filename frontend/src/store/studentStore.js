import {create} from 'zustand'
import axios from 'axios'  // para hacer peticiones

const useStudentStore = create((set)=>({
    students: [],
    addStudent: async(student)=>{
        try {
            const response = await axios.post('http://localhost:3001/producto',student)
            set((state)=>({students: [...state.students, response.data]}))// crea una copia el "..."
        } catch (error) {
            console.log("Error adding producto", error.message)
        }
    },
    fetchStudents: async()=>{
        try {
            const response = await axios.get('http://localhost:3001/producto')
            set({students: response.data})
        } catch (error) {
            console.log("Error fecthing producto", error.message)
        }
    },
    deleteStudent: async(idProducto)=>{
        try {
            const response = await axios.delete(`http://localhost:3001/producto/${idProducto}`)
            console.log("producto delete:",response.data)
            set((state)=>({students: state.students.filter(student=>student.idProducto !== idProducto)})) // filtra todos lo estudiantes actualizados o
        } catch (error) {                                                               // diferentes del id eliminado
            console.log("Error deleting producto:", error.message)
        }
    },
    //____----------Agregado---------------________
    updateStudent: async (idProducto, updatedData) => {
        try {  // Realiza una solicitud PUT para actualizar el estudiante en el servidor.
            const response = await axios.put(`http://localhost:3001/producto/${idProducto}`, updatedData)
            console.log("producto updated:", response.data)
            // Actualiza el estado localmente, modificando solo el estudiante con el id coincidente.
            set((state) => ({students: state.students.map((student)=> student.idProducto === idProducto ? {...student, ...response.data} : student)})) // actualiza el estudiante en el estado
        } catch (error) {
            console.log("Error updating producto:", error.message)
        }
    }
    
}))

export default useStudentStore