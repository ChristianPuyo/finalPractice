import { create } from 'zustand';
import axios from 'axios';

const useStudentStore = create((set) => ({
    students: [],
    
    // Función para agregar un estudiante
    addStudent: async (student) => {
        try {
            const response = await axios.post('http://localhost:3001/Student', student);
            set((state) => ({ students: [...state.students, response.data] }));
        } catch (error) {
            console.log("Error adding student", error.message);
        }
    },

    // Función para obtener los estudiantes
    fetchStudents: async () => {
        try {
            const response = await axios.get('http://localhost:3001/Student');
            set(() => ({ students: response.data }));
        } catch (error) {
            console.log("Error fetching students", error.message);
        }
    },

    // Función para eliminar un estudiante
    deleteStudent: async (id) => {
        try {
            await axios.delete(`http://localhost:3001/Student/${id}`);
            set((state) => ({ students: state.students.filter(student => student.id !== id) }));
        } catch (error) {
            console.log("Error deleting student: ", error.message);
        }
    },

    // Función para editar un estudiante
    updateStudent: async (id, updatedStudent) => {
        try {
            const response = await axios.put(`http://localhost:3001/Student/${id}`, updatedStudent);
            set((state) => ({
                students: state.students.map((student) =>
                    student.id === id ? response.data : student
                )
            }));
        } catch (error) {
            console.log("Error updating student: ", error.message);
        }
    }
}));

export default useStudentStore;
