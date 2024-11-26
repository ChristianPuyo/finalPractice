import { useEffect, useState } from "react"
import useContactoStore from "../../store/contactoStore"
// import Navegador from "../navegador/Navegador"

const ContactoList = () => {
    const { fetchContacto, contacto, deleteContacto, updateContacto } = useContactoStore()
    const [editingContacto, setEditingContacto] = useState(null) // Almacena la actividad que se está editando
    const [formData, setFormData] = useState({
        
        firstname: '',
        lastname: '',
        telefono: '',
        correo: ''
    }) // Datos del formulario de edición
    const [loading, setLoading] = useState(false) // Estado de carga

    // Cargar la lista de actividades al mostrar el componente
    useEffect(() => {
        setLoading(true)
        fetchContacto().finally(() => setLoading(false)) // Cargar las actividades y manejar el estado de carga
    }, [])

    // Elimina la actividad tras confirmar y actualiza la lista
    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
            deleteContacto(id) // Llama a la función para eliminar
            // fetchActividad() // No es necesario si 'deleteActividad' ya actualiza el estado
        }
    }

    // Configura la actividad seleccionada para edición y rellena el formulario con sus datos
    const handleEditClick = (contacto) => {
        setEditingContacto(contacto) // Establece la actividad en edición
        setFormData({
            firstname:  contacto.firstname || '',
            lastname: contacto.lastname || '',
            telefono: contacto.telefono || '',
            correo: contacto.correo || '',
            
        }) // Rellena los campos con los datos actuales
    }

    // Maneja los cambios en el formulario de edición
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Actualiza solo el campo modificado
        })
    }

    // Actualiza la actividad en el servidor y refresca la lista
    const handleUpdate = () => {
        updateContacto(editingContacto.id, formData) // Actualiza la actividad
        setEditingContacto(null) // Cierra el formulario de edición
        fetchContacto() // Luego recarga la lista de actividades
    }

    return (
        <div>
            <div><Navegador></Navegador></div>
            <div>
                <h1>Contacto List</h1>

                {/* Estado de carga */}
                {loading && <p>Loading...</p>}

                <div>
                    {contacto.map((contacto) => (
                        <div key={contacto.id}>
                            <h3>{contacto.id}<br /> {contacto.firstname} {contacto.lastname} {contacto.telefono} {contacto.correo} </h3>
                            <button onClick={() => handleDelete(contacto.id)}>❌</button>
                            <button onClick={() => handleEditClick(contacto)}>✍️</button>
                        </div>
                    ))}
                </div>

                {/* Muestra el formulario de edición solo si hay una actividad seleccionada */}
                {editingContacto && (
                    <div>
                        <h3>Edit Contacto</h3>
                        <input 
                            type="text" 
                            name="firstname" 
                            value={formData.firstname} 
                            onChange={handleInputChange} 
                            placeholder="firstname"
                        />
                        <input 
                            type="text" 
                            name="lastname" 
                            value={formData.lastname} 
                            onChange={handleInputChange} 
                            placeholder="lastname"
                        />
                        <input 
                            type="text" 
                            name="telefono" 
                            value={formData.telefono} 
                            onChange={handleInputChange} 
                            placeholder="telefono"
                        />
                        <input 
                            type="text" 
                            name="correo" 
                            value={formData.correo} 
                            onChange={handleInputChange} 
                            placeholder="correo"
                        />
                        
                        <button onClick={handleUpdate}>Save</button>
                        <button onClick={() => setEditingContacto(null)}>Cancel</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactoList