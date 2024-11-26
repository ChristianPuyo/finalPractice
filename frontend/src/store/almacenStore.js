import {create} from 'zustand'
import axios from 'axios'  // para hacer peticiones

const useCourseStore = create((set)=>({
    courses: [],
    addCourse: async(course)=>{
        try {
            const response = await axios.post('http://localhost:3001/almacen',course)
            set((state)=>({courses: [...state.courses, response.data]}))// crea una copia el "..."
        } catch (error) {
            console.log("Error adding user", error.message)
        }
    },
    fetchCourses: async()=>{
        try {
            const response = await axios.get('http://localhost:3001/almacen')
            set({courses: response.data})
        } catch (error) {
            console.log("Error fecthing almacen", error.message)
        }
    },
    deleteCourse: async(idAlmacen)=>{
        try {
            const response = await axios.delete(`http://localhost:3001/almacen/${idAlmacen}`)
            console.log("almacen delete:",response.data)
            set((state)=>({courses: state.courses.filter(course=>course.idAlmacen !== idAlmacen)})) // filtra todos lo estudiantes actualizados o
        } catch (error) {                                                               // diferentes del id eliminado
            console.log("Error deleting almacen:", error.message)
        }
    },
    //____----------Agregado---------------________
    updateCourse: async (idAlmacen, updatedData) => {
        try {  // Realiza una solicitud PUT para actualizar el estudiante en el servidor.
            const response = await axios.put(`http://localhost:3001/almacen/${idAlmacen}`, updatedData)
            console.log("course updated:", response.data)
            // Actualiza el estado localmente, modificando solo el estudiante con el id coincidente.
            set((state) => ({courses: state.courses.map((course)=> course.idAlmacen === idAlmacen ? {...course, ...response.data} : course)})) // actualiza el estudiante en el estado
        } catch (error) {
            console.log("Error updating almacen:", error.message)
        }
    }
    
}))

export default useCourseStore