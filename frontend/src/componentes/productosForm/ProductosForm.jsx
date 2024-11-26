import { useState } from "react";
import useProductoStore from "../../store/productoStore";
import Navegador from '../navegador/Navegador';
import './ProductosForm.css';

const ProductosForm = () => {
    const { addProductos } = useProductoStore();
    const [productoData, setProductoData] = useState({
        codigoProducto: "",
        nombre: "",
        precio: "",
        cantidad: "",
        categoria: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductoData({
            ...productoData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addProductos(productoData);
        setProductoData({
            codigoProducto: "",
            nombre: "",
            precio: "",
            cantidad: "",
            categoria: ""
        });
        alert("Producto ingresado exitosamente!");
    };

    return (
        <div className="form-container">
            <Navegador />
            <div className="form-content">
                <h1>Formulario de Productos</h1>
                <form onSubmit={handleSubmit}>
                    <label>Código del Producto:</label>
                    <input
                        type="text"
                        placeholder="Ingrese el código"
                        required
                        name="codigoProducto"
                        value={productoData.codigoProducto}
                        onChange={handleInputChange}
                    />

                    <label>Nombre del Producto:</label>
                    <input
                        type="text"
                        placeholder="Ingrese el nombre"
                        required
                        name="nombre"
                        value={productoData.nombre}
                        onChange={handleInputChange}
                    />

                    <label>Precio:</label>
                    <input
                        type="number"
                        placeholder="Ingrese el precio"
                        required
                        name="precio"
                        value={productoData.precio}
                        onChange={handleInputChange}
                    />

                    <label>Cantidad:</label>
                    <input
                        type="number"
                        placeholder="Ingrese la cantidad"
                        required
                        name="cantidad"
                        value={productoData.cantidad}
                        onChange={handleInputChange}
                    />

                    <label>Categoría:</label>
                    <input
                        type="text"
                        placeholder="Ingrese la categoría"
                        required
                        name="categoria"
                        value={productoData.categoria}
                        onChange={handleInputChange}
                    />

                    <button type="submit" className="buttonsave">Guardar Producto</button>
                </form>
            </div>
        </div>
    );
};

export default ProductosForm;
