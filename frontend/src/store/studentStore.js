import {create} from 'zustand'
import axios from 'axios'

const useStudentStore = create((set)=>({
    students: [],
    addStudent: async(student)=>{
        try {
            const response = await axios.post('http://localhost:3001/student', student)
            
        } catch (error) {
            console.log("Error adding user", error.message);
            
        }
    },
    fetchStudents:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/student')
            
        } catch (error) {
            console.log("Error fetching students", error.message)
        }
    },
    deleteStudent: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/student/${id}`)
            console.log("Student deleted:",response.data)
            

        } catch (error) {
            console.log("Error deleting student:",  error.message)

        }
    }


}))
export default useStudentStore;