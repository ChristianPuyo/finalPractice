import { useState } from "react";
import styles from "./ProductForm.module.css"; // Cambié el nombre a 'ProductForm'
import useProductStore from "../../store/productoStore";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal"; // Modal para mostrar el mensaje de éxito

const ProductForm = () => {
  const navigate = useNavigate();
  const addProduct = useProductStore((state) => state.addProduct); // Usamos el store de productos
  const [productData, setProductData] = useState({
    codigo: "", // Código del producto
    name: "", // Nombre del producto
    price: 0, // Precio del producto
    quantity: 0, // Cantidad disponible
    category: "", // Categoría del producto
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Estado para manejar el modal de éxito

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value }); // Actualizamos el estado del formulario
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del producto:", productData); // Verifica los datos antes de enviarlos
    try {
      await addProduct(productData); // Llamamos al store para agregar el producto
      setIsSuccessModalOpen(true); // Abrimos el modal de éxito
      setProductData({
        codigo: "",
        name: "",
        price: 0,
        quantity: 0,
        category: "",
      }); // Limpiamos el formulario
    } catch (error) {
      alert("ERROR AL INSERTAR DATOS");
      console.error("Error al insertar producto:", error.message);
    }
  };

  const volverAinicio = () => {
    navigate("/"); // Regresa a la página de inicio
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false); // Cierra el modal de éxito
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={volverAinicio}>
        Regresar
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4 className={styles.title}>Insertar Producto</h4>

        <label className={styles.label}>
          Código del Producto:
          <input
            type="text"
            placeholder="Ingrese código del producto"
            required
            name="codigo"
            value={productData.codigo}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Nombre:
          <input
            type="text"
            placeholder="Ingrese nombre del producto"
            required
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Precio:
          <input
            type="number"
            placeholder="Ingrese precio"
            required
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Cantidad:
          <input
            type="number"
            placeholder="Ingrese cantidad"
            required
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Categoría:
          <input
            type="text"
            placeholder="Ingrese categoría"
            required
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.saveButton}>
          GUARDAR
        </button>
      </form>

      <Modal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Éxito"
        message="El producto se ha insertado con éxito."
      />
    </div>
  );
};

export default ProductForm;
