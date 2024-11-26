import React, { useState, useEffect } from 'react';
import './contactos.css';
import axios from 'axios';
import Contactos2 from './secucontactos/concactos2';

const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  const [editableContacto, setEditableContacto] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoTelefono, setNuevoTelefono] = useState('');

  // Obtener contactos del backend
  useEffect(() => {
    axios.get('http://localhost:3005/api/contactos')
      .then(response => setContactos(response.data))
      .catch(error => console.error('Error al obtener los contactos', error));
  }, []);

  // Eliminar un contacto
  const eliminarContacto = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/api/contactos/${id}`);
      setContactos(contactos.filter(contacto => contacto.id !== id));
      console.log("Contacto eliminado");
    } catch (error) {
      console.error("Error al eliminar el contacto", error);
    }
  };

  // Editar un contacto
  const editarContacto = (contacto) => {
    setEditableContacto(contacto);
    setNuevoNombre(contacto.nombre);
    setNuevoTelefono(contacto.telefono);
  };

  // Guardar los cambios en un contacto
  const guardarContacto = async () => {
    if (!nuevoNombre || !nuevoTelefono) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    try {
      const updatedContacto = {
        ...editableContacto,
        nombre: nuevoNombre,
        telefono: nuevoTelefono
      };
      await axios.put(`http://localhost:3005/api/contactos/${editableContacto.id}`, updatedContacto);
      setContactos(contactos.map(contacto => contacto.id === editableContacto.id ? updatedContacto : contacto));
      setEditableContacto(null);
      setNuevoNombre('');
      setNuevoTelefono('');
    } catch (error) {
      console.error("Error al actualizar el contacto", error);
    }
  };

  return (
    <div className="contactos-container">
      <h2>Lista de Contactos</h2>
      <ul>
        {contactos.map(contacto => (
          <li key={contacto.id}>
            <span>{contacto.nombre} - {contacto.telefono}</span>
            <button onClick={() => editarContacto(contacto)}>Editar</button>
            <button onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Formulario para editar un contacto */}
      {editableContacto && (
        <div className="editar-contacto">
          <h3>Editar Contacto</h3>
          <input 
            type="text" 
            placeholder="Nombre"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Teléfono"
            value={nuevoTelefono}
            onChange={(e) => setNuevoTelefono(e.target.value)}
          />
          <button onClick={guardarContacto}>Guardar cambios</button>
          <button onClick={() => setEditableContacto(null)}>Cancelar</button>
        </div>
      )}

      <Contactos2 />
    </div>
  );
}

export default Contactos;
