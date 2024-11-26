import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import useProductStore from "../../store/productStore"; // Asegúrate de que la ruta sea correcta

const ProductForm = () => {
    const { addProduct } = useProductStore(); // Cambia addUser a addProduct
    const navigate = useNavigate(); // Inicializa useNavigate

    const [productData, setProductData] = useState({
        nombre: "", 
        precio: "",
        cantidad: "",
        categoria: "" // Añadido campo para categoria
    });

    console.log(productData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typeof addProduct === 'function') { // Verifica si addProduct es una función
            await addProduct({
                nombre: productData.nombre, // Mapeo del nombre
                precio: parseFloat(productData.precio), // Mapeo del precio
                cantidad: parseInt(productData.cantidad), // Mapeo de la cantidad
                categoria: productData.categoria // Mapeo de la categoría
            }); 
            setProductData({
                nombre: "",
                precio: "",
                cantidad: "",
                categoria: "" // Reinicia el campo de categoría
            });
            alert("PRODUCTO AGREGADO");

            // Redirige a otra ruta después de agregar el producto
            navigate('/'); // Cambia '/ruta-deseada' por la ruta a la que deseas redirigir
        } else {
            console.error("addProduct no es una función");
        }
    };

    return (
        <div className="register">
            <h1>FORMULARIO DE PRODUCTO</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del Producto"
                    required
                    name="nombre" 
                    value={productData.nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="number" // Cambiado a tipo number para precios
                    placeholder="Precio"
                    required
                    name="precio"
                    value={productData.precio}
                    onChange={handleInputChange}
                />
                <input
                    type="number" // Cambiado a tipo number para cantidad
                    placeholder="Cantidad"
                    required
                    name="cantidad"
                    value={productData.cantidad}
                    onChange={handleInputChange}
                />
                <input
                    type="text" // Tipo texto para categoría
                    placeholder="Categoría"
                    required
                    name="categoria"
                    value={productData.categoria}
                    onChange={handleInputChange}
                />
                <button type="submit">AGREGAR</button>  
            </form>
        </div>
    );
};

export default ProductForm;