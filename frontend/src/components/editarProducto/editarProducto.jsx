import { useState } from "react";
import useProductStore from '../../store/productoStore';
import { useNavigate } from "react-router-dom";
import styles from "./editProductoForm.module.css"; // Cambié el nombre del archivo a 'editProductoForm'
import Modal from "../modal/modal"; 

const EditProductoForm = () => {
  const navigate = useNavigate();
  const { updateProductByCode, getProductByCodigo } = useProductStore(); // Usamos las funciones para productos

  const [productData, setProductData] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    precio: "",
    stock: ""
  });

  const [modalOpen, setModalOpen] = useState(false);

  const volverAInicio = () => {
    navigate("/"); // Regresar a la página de inicio
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Manejar el evento de presionar Enter en el campo código
  const handleCodigoKeyPress = (e) => {
    if (e.key === "Enter") {
      if (productData.codigo) {
        fetchProductData(productData.codigo); // Buscar producto solo cuando el código no esté vacío
      }
    }
  };

  const handleCodigoChange = (e) => {
    const { value } = e.target;
    setProductData({
      codigo: value,
      nombre: value ? productData.nombre : "",
      descripcion: value ? productData.descripcion : "",
      precio: value ? productData.precio : "",
      stock: value ? productData.stock : "",
    });
  };

  // Función para obtener los datos del producto por código
  const fetchProductData = async (codigo) => {
    try {
      const product = await getProductByCodigo(codigo); // Obtener el producto por su código
      if (product) {
        setProductData({
          codigo: product.codigo,
          nombre: product.nombre,
          descripcion: product.descripcion,
          precio: product.precio,
          stock: product.stock
        });
      } else {
        alert("Producto no encontrado");
        setProductData({ codigo: "", nombre: "", descripcion: "", precio: "", stock: "" }); // Limpiar los campos si no se encuentra el producto
      }
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      alert("Hubo un error al obtener los datos del producto");
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const codigoValue = productData.codigo;
    if (codigoValue && productData.nombre && productData.descripcion && productData.precio && productData.stock) {
        const update = await updateProductByCode(codigoValue, productData); // Cambiar aquí a 'updateProductByCode'
        if (update) {
            setModalOpen(true);
        } else {
            alert("Hubo un error al actualizar el producto");
        }
    } else {
        alert("Por favor complete todos los campos.");
    }
  };
  

  return (
    <div className={styles.container}>
      <button onClick={volverAInicio} className={styles.backButton}>
        Regresar
      </button>
      <form className={styles.form} onSubmit={handleSubmitUpdate}>
        <h4 className={styles.title}>Edición de Producto</h4>

        <label className={styles.label}>
          Código del Producto
          <input
            type="text"
            placeholder="Enter código"
            name="codigo"
            value={productData.codigo}
            onChange={handleCodigoChange} // Actualizamos el código cuando cambia
            onKeyPress={handleCodigoKeyPress} // Ejecutamos la búsqueda cuando presionamos Enter
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Nombre del Producto:
          <input
            type="text"
            placeholder="Enter Nombre"
            required
            name="nombre"
            value={productData.nombre}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!productData.codigo} // Deshabilitar el campo si no hay un código
          />
        </label>

        <label className={styles.label}>
          Descripción:
          <input
            type="text"
            placeholder="Enter Descripción"
            required
            name="descripcion"
            value={productData.descripcion}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!productData.codigo} // Deshabilitar el campo si no hay un código
          />
        </label>

        <label className={styles.label}>
          Precio:
          <input
            type="number"
            placeholder="Enter Precio"
            required
            name="precio"
            value={productData.precio}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!productData.codigo} // Deshabilitar el campo si no hay un código
          />
        </label>

        <label className={styles.label}>
          Stock:
          <input
            type="number"
            placeholder="Enter Stock"
            required
            name="stock"
            value={productData.stock}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!productData.codigo} // Deshabilitar el campo si no hay un código
          />
        </label>

        <button className={styles.submitButton}>Actualizar</button>
      </form>

      {/* Modal de éxito */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} 
        title="Éxito"
        message="Producto actualizado con éxito."
      />
    </div>
  );
};

export default EditProductoForm;
