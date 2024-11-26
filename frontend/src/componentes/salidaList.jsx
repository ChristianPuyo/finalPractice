import { useEffect, useState } from "react"
import useGestionGrupoStore from "../store/salidaStore"
import NavegadorIncicio from "./navegador"

const SalidaList = ()=>{
    const {fetchGestionGrupos, gestionGrupos, deleteGestionGrupo, updateGestionGrupo} = useGestionGrupoStore()
    const [editingGestionGrupo, setEditingGestionGrupo] = useState(null) // Almacena el estudiante que se está editando
    const [formData, setFormData] = useState({ idAlmacen: '',fechaSalida: ''}) // Datos del formulario de edición

    // Cargar la lista de estudiantes al mostrar el componente
    useEffect(()=>{
        fetchGestionGrupos()
    },[])

    // Elimina el estudiante tras confirmar y actualiza la lista
    const handleDelete = (idSalida)=>{
        if(window.confirm("Are you sure?")){
            deleteGestionGrupo(idSalida)
            fetchGestionGrupos() // Refresca 
        }  
    }
     //////----Agregado----///
    // Configura el estudiante seleccionado para edición y rellena el formulario con sus datos
    const handleEditClick = (gestiongrupo) => {  
        setEditingGestionGrupo(gestiongrupo) // Establece el estudiante en edición
        setFormData({ idAlmacen: gestiongrupo.idAlmacen, fechaSalida: gestiongrupo.fechaSalida, periodoAcademicoId: gestiongrupo.periodoAcademicoId}) // Rellena los campos con los datos actuales
    }

    // Maneja los cambios en el formulario de edición
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Actualiza solo el campo modificado
        })
    }

    // Actualiza el estudiante en el servstudent_idor y refresca la lista
    const handleUpdate = async () => {
        await updateGestionGrupo(editingGestionGrupo.idSalida, formData) // Espera a que updatePreriquisitoCurso complete la actualización
        setEditingGestionGrupo(null) // Cierra el formulario de edición
        fetchGestionGrupos() // Luego recarga la lista de estudiantes
    }
    /////-------------////

    return (
        <div>
            <div><NavegadorIncicio></NavegadorIncicio></div>
        <div>
            
            <div >
                <h1>GestionGrupo List</h1>

                <div>
                    {
                        gestionGrupos.map((user) => (
                            <div key={user.idSalida}>
                                <h3>{user.idSalida}<br></br> {user.idAlmacen} {user.fechaSalida}</h3>
                                <button onClick={() => handleDelete(user.idSalida)}>❌</button>
                                <button onClick={() => handleEditClick(user)}>✍️</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Muestra el formulario de edición solo si hay un estudiante seleccionado */}
            {editingGestionGrupo && (
                        <div>
                            <h3>Edit GestionGrupo</h3>
                            <input 
                                type="text" 
                                name="cursoId" 
                                value={formData.idAlmacen} 
                                onChange={handleInputChange} 
                                placeholder="cursoId"
                            />
                            <input 
                                type="text" 
                                name="fechaSalida" 
                                value={formData.fechaSalida} 
                                onChange={handleInputChange} 
                                placeholder="fechaSalida"
                            />
                            
                            <button onClick={handleUpdate}>Save</button>
                            <button onClick={() => setEditingGestionGrupo(null)}>Cancel</button>
                        </div>
                    )}
        </div>
        </div>
    )
}

export default SalidaList