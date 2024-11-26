import { useEffect, useState } from "react"
import useStudentStore from "../store/studentStore"
import NavegadorIncicio from "./navegador"

const ProductoList = ()=>{
    const {fetchStudents, students, deleteStudent, updateStudent} = useStudentStore()
    const [editingStudent, setEditingStudent] = useState(null) // Almacena el estudiante que se está editando
    const [formData, setFormData] = useState({nombre: '',precio: '',categoria: '' }) // Datos del formulario de edición

    // Cargar la lista de estudiantes al mostrar el componente
    useEffect(()=>{
        fetchStudents()
    },[])

    // Elimina el estudiante tras confirmar y actualiza la lista
    const handleDelete = (idProducto)=>{
        if(window.confirm("Are you sure?")){
            deleteStudent(idProducto)
            fetchStudents() // Refresca 
        }  
    }
     //////----Agregado----///
    // Configura el estudiante seleccionado para edición y rellena el formulario con sus datos
    const handleEditClick = (student) => {  
        setEditingStudent(student) // Establece el estudiante en edición
        setFormData({ nombre: student.nombre, precio: student.precio, categoria: student.categoria, email: student.email, apoderado: student.apoderado, direccion: student.direccion}) // Rellena los campos con los datos actuales
    }

    // Maneja los cambios en el formulario de edición
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Actualiza solo el campo modificado
        })
    }

    // Actualiza el estudiante en el servor y refresca la lista
    const handleUpdate = async () => {
        await updateStudent(editingStudent.idProducto, formData) // Espera a que updateStudent complete la actualización
        setEditingStudent(null) // Cierra el formulario de edición
        fetchStudents() // Luego recarga la lista de estudiantes
    }
    /////-------------////

    return (
        <div>
            <div><NavegadorIncicio></NavegadorIncicio></div>
        <div>
            
            <div >
                <h1>Producto List</h1>

                <div>
                    {
                        students.map((user) => (
                            <div key={user.idProducto}>
                                <h3>{user.idProducto}<br></br>{user.nombre} {user.precio} {user.categoria} {user.email} {user.apoderado} {user.direccion}</h3>
                                <button onClick={() => handleDelete(user.idProducto)}>❌</button>
                                <button onClick={() => handleEditClick(user)}>✍️</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Muestra el formulario de edición solo si hay un estudiante seleccionado */}
            {editingStudent && (
                        <div>
                            <h3>Edit Producto</h3>
                            <input 
                                type="text" 
                                name="nombre" 
                                value={formData.nombre} 
                                onChange={handleInputChange} 
                                placeholder="nombre"
                            />
                            <input 
                                type="text" 
                                name="precio" 
                                value={formData.precio} 
                                onChange={handleInputChange} 
                                placeholder="precio"
                            />
                            <input 
                                type="text" 
                                name="categoria" 
                                value={formData.categoria} 
                                onChange={handleInputChange} 
                                placeholder="categoria"
                            />
                            <button onClick={handleUpdate}>Save</button>
                            <button onClick={() => setEditingStudent(null)}>Cancel</button>
                        </div>
                    )}
        </div>
        </div>
    )
}

export default ProductoList
