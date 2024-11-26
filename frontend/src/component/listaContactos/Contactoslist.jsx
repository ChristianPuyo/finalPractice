import { useEffect } from "react"
import useStudentStore from "../../store/studentStore"

const StudentList = ()=>{
    const { fetchStudents, students, deleteStudent } = useStudentStore();
    useEffect(()=>{
        fetchStudents();
    },[])

    const  handleDelete = (id)=>{
        if(window.confirm("Are you sure?")){
            deleteStudent(id);
        }
    }


    return(<div>
        <h1>Student List</h1>
        {
          students.map((user)=>{
            return(
                <div>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <button onClick={()=>handleDelete(user.id)}>❌</button>
                    <button>✍️</button>
                </div>
            )
          })  
        }
    </div>)
}

export default StudentList