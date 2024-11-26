import React, { useState, useEffect } from 'react';
import './edit.css';
import useProductStore from '../../store/productStore'; // Cambia la referencia a la tienda de productos
import { IoSaveOutline } from "react-icons/io5"; 
import { IoTrashOutline } from "react-icons/io5"; 

const Modal = ({ product, onClose }) => {
    const { updateProduct } = useProductStore(); // Cambia la función para actualizar productos
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        cantidad: '',
        categoria: '',
    });

    useEffect(() => {
        if (product) {
            setFormData({
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
                categoria: product.categoria,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(product.id, formData); // Actualiza el producto
            alert('Producto Modificado.');
            onClose();
        } catch (error) {
            console.error('Error al actualizar:', error);
        }
    };

    return (
        <div className='edit-modal'>
            <div className="modal-content">
                <h3>Modificar Producto</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        NOMBRE:
                        <input 
                            type="text" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <label>
                        PRECIO:
                        <input 
                            type="number" 
                            name="precio" 
                            value={formData.precio} 
                            onChange={handleChange} 
                            required
                            step="0.01" // Permite ingresar precios decimales
                        />
                    </label>
                    <label>
                        CANTIDAD:
                        <input 
                            type="number" 
                            name="cantidad" 
                            value={formData.cantidad} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <label>
                        CATEGORÍA:
                        <input 
                            type="text" 
                            name="categoria" 
                            value={formData.categoria} 
                            onChange={handleChange} 
                            required
                        />
                    </label>
                    <div className="btns">
                        <button type="submit" className='btn-guardar'>
                            <IoSaveOutline /> Guardar
                        </button>
                        <button type="button" className='btn-cancelar' onClick={onClose}>
                            <IoTrashOutline /> Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;