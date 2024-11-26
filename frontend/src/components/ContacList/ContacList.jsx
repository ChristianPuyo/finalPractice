import { useEffect, useState } from "react";
import usecontactStore from "../../store/studentStore";
import style from './ContactList.module.css';

const ContactList = () => {
    const { fetchcontacts, contacts, deletecontact, editcontact } = usecontactStore();
    const [editingContact, setEditingContact] = useState(null);
    const [updatedData, setUpdatedData] = useState({ nombre: "", tel: "", email: "" });
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchcontacts();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este contacto?")) {
            deletecontact(id);
        }
    };

    const handleEditClick = (contact) => {
        setEditingContact(contact);
        setUpdatedData(contact);
    };

    const handleSave = () => {
        editcontact(editingContact.id, updatedData);
        setEditingContact(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prev) => ({ ...prev, [name]: value }));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={style.listContainer}>
            <h1>Contact List</h1>

            <div className={style.searchContainer}>
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={style.searchInput}
                />
            </div>

            {filteredContacts && filteredContacts.length > 0 ? (
                filteredContacts.map((user) => (
                    <div className={style.contactCard} key={user.id}>
                        <h3>{user.nombre}</h3>
                        <p>Teléfono: {user.tel}</p>
                        <p>Email: {user.email}</p>
                        <button onClick={() => handleDelete(user.id)}>❌ Eliminar</button>
                        <button onClick={() => handleEditClick(user)}>✍️ Editar</button>
                    </div>
                ))
            ) : (
                <p>No hay contactos disponibles.</p>
            )}

            {editingContact && (
                <div className={style.overlay}>
                    <div className={style.editModal}>
                        <h2>Editando a: {editingContact.nombre}</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    name="nombre"
                                    value={updatedData.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Teléfono:
                                <input
                                    type="text"
                                    name="tel"
                                    value={updatedData.tel}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={updatedData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className={style.modalButtons}>
                                <button type="submit">Guardar</button>
                                <button type="button" onClick={() => setEditingContact(null)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactList;
