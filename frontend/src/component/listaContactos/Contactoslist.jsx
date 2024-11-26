import { useEffect, useState } from "react";
import useStudentStore from "../../store/studentStore";

const StudentList = () => {
    const { fetchStudents, students, deleteStudent } = useStudentStore();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteStudent(id);
        }
    };
    const filteredStudents = students.filter(
        (student) =>
            student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.numero.toString().includes(searchTerm)
    );

    return (
        <div>
            <h1>contactos List</h1>
            <input
                type="text"
                placeholder="Search by name or number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredStudents.map((student) => {
                return (
                    <div key={student.id}>
                        <h3>{student.nombre} ({student.numero})</h3>
                        <button onClick={() => handleDelete(student.id)}>❌</button>
                        <button>✍️</button>
                    </div>
                );
            })}
        </div>
    );
};

export default StudentList;
