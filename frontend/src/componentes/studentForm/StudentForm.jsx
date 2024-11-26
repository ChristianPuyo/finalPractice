import { useState, useEffect } from "react";
import useStudentStore from "../../store/studentStore";


const StudentForm = () => {
    const { addStudent, updateStudent, deleteStudent, fetchStudents, students } = useStudentStore(); 

    const [studentData, setStudentData] = useState({
        nombre: "", 
        telefono: "",
        correo: "",
    });

    const [editingId, setEditingId] = useState(null); // Para almacenar el ID del estudiante que está siendo editado
    const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda

    // Cargar estudiantes al montar el componente
    useEffect(() => {
        fetchStudents(); // Cargar la lista de estudiantes al inicio
    }, [fetchStudents]);

    // Esta función se utiliza para manejar los cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value,
        });
    };

    // Esta función se utiliza para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
            // Si estamos editando un estudiante, actualizamos
            updateStudent(editingId, studentData); 
            setEditingId(null); // Limpiar la edición
        } else {
            // Si no estamos editando, agregamos un nuevo estudiante
            addStudent(studentData); 
        }

        setStudentData({
            nombre: "",
            telefono: "",
            correo: "",
        });
        alert(editingId ? "ESTUDIANTE EDITADO" : "ESTUDIANTE AGREGADO");
    };

    // Esta función se utiliza para cargar los datos del estudiante que queremos editar
    const handleEdit = (student) => {
        setEditingId(student.id); // Establecemos el ID del estudiante que estamos editando
        setStudentData({
            nombre: student.nombre,
            telefono: student.telefono,
            correo: student.correo,
        });
    };

    // Esta función se utiliza para eliminar un estudiante
    const handleDelete = (id) => {
        deleteStudent(id);  // Llamamos a la función para eliminar el estudiante
        alert("ESTUDIANTE ELIMINADO");
    };

    // Filtrar estudiantes por nombre
    const filteredStudents = students.filter((student) =>
        student.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="form-container">
                <h1>FORMULARIO DE ESTUDIANTE</h1>

                {/* Campo de búsqueda */}
                <div className="search">
                    <input
                        type="text"
                        placeholder="Buscar por nombre"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Formulario de agregar/editar estudiante */}
                <form onSubmit={handleSubmit} className="student-form">
                    <input
                        type="text"
                        placeholder=" Nombre"
                        required
                        name="nombre" 
                        value={studentData.nombre}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder=" Teléfono"
                        required
                        name="telefono"
                        value={studentData.telefono}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder=" Correo"
                        required
                        name="correo"
                        value={studentData.correo}
                        onChange={handleInputChange}
                    />
                    <button type="submit">{editingId ? "EDITAR" : "AGREGAR"}</button>  
                </form>
            </div>

            {/* Lista de estudiantes */}
            <div className="list-container">
                <h2>Lista de Estudiantes</h2>
                {filteredStudents.length > 0 ? (
                    <ul>
                        {filteredStudents.map((student) => (
                            <li key={student.id}>
                                <span>{student.nombre} - {student.telefono} - {student.correo}</span>
                                <button onClick={() => handleEdit(student)}>Editar</button>
                                <button onClick={() => handleDelete(student.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay estudiantes registrados.</p>
                )}
            </div>
        </div>
    );
};

export default StudentForm;