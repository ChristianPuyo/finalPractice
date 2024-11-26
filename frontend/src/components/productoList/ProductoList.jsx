import React, { useEffect, useState } from 'react';
import './lista.css';
import useProductStore from '../../store/productStore'; // Cambia la referencia a la tienda de productos
import EditModal from './Modal'; // Asegúrate de que este modal puede manejar productos
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlineEye } from 'react-icons/ai';


const ProductList = () => {
    const { fetchProducts, products, deleteProduct } = useProductStore(); // Cambia las funciones para productos
    const [deleteModal, setDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null); 
    const [editModal, setEditModal] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProducts(); // Carga los productos en lugar de estudiantes
    }, []);

    const handleDelete = (id) => {
        deleteProduct(id); // Elimina el producto
        setDeleteModal(false);
    }

    const handleDeleteModal = (productId) => {
        setProductToDelete(productId);
        setDeleteModal(!deleteModal);
    }

    const handleEditModal = (product) => {
        setProductToEdit(product);
        setEditModal(!editModal);
    }

    // Filtra los productos según el término de búsqueda
    const filteredProducts = products.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='lista'>
            <h1>LISTA DE PRODUCTOS</h1>

            {/* Campo de búsqueda */}
            <input 
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <table className='product-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.nombre}</td>
                            <td>${product.precio.toFixed(2)}</td>
                            <td>{product.cantidad}</td>
                            <td>{product.categoria}</td>
                            <td>
                                <AiOutlineEye className='edit-ico' onClick={() => handleEditModal(product)} />
                                <RiDeleteBin5Fill className='delete-ico ico' onClick={() => handleDeleteModal(product.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {deleteModal && (
                <div className='modal-delete'>
                    <div className="contend">
                        <p>ELIMINAR PRODUCTO</p>
                        <div className="btns">
                            <button className='btn-SI' onClick={() => handleDelete(productToDelete)}>SI</button>
                            <button className='btn-NO' onClick={handleDeleteModal}>NO</button>
                        </div>
                    </div>
                </div>
            )}
            
            {editModal && (
                <EditModal product={productToEdit} onClose={handleEditModal} /> // Asegúrate de que EditModal maneje productos
            )}
        </div>
    );
}

export default ProductList;