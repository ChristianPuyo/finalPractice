import React, { useState } from "react";
import styles from "./eliminarProducto.module.css"; // Cambié el nombre del archivo a 'eliminarProducto'
import { useNavigate } from "react-router-dom";
import useProductStore from "../../store/productoStore";

const EliminarProducto = () => {
  const [codigo, setCodigo] = useState("");  // Cambié el estado a 'codigo' para identificar el producto
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { deleteProductByCode } = useProductStore();  // Usamos el store de productos

  const volverAinicio = () => {
    navigate("/");  // Regresa a la página de inicio
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCodigo(value);  // Actualizamos solo el 'codigo' del producto
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Abrimos el modal de confirmación
  };

  const confirmarEliminacion = async () => {
    const deleted = await deleteProductByCode(codigo); // Ahora retorna true o false
  
    if (deleted) {
      alert("Producto Eliminado");
      setCodigo(""); // Limpiamos el campo código
    } else {
      alert("No se encontró el producto o error al eliminar.");
    }
  
    setIsModalOpen(false); // Cerrar el modal después de la eliminación
  };
  

  const cancelarEliminacion = () => {
    setIsModalOpen(false); // Cerrar el modal sin eliminar
  };

  return (
    <div className={styles.container}>
      <button onClick={volverAinicio} className={styles.backButton}>
        Regresar
      </button>

      <form className={styles.form} onSubmit={handleDeleteClick}>
        <h2 className={styles.title}>ELIMINAR PRODUCTO</h2>
        <div className={styles.dataSection}>
          <h3 className={styles.subtitle}>Ingrese el código del producto a eliminar:</h3>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Código del Producto"  // Cambié el placeholder a 'Código del Producto'
            className={styles.input}
            name="codigo"
            value={codigo}  // Usamos el estado 'codigo' en lugar de 'id'
          />
          <button type="button" onClick={handleDeleteClick} className={styles.deleteButton}>
            Eliminar
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>¿Está seguro que desea eliminar este producto?</h3>
            <div className={styles.modalActions}>
              <button onClick={confirmarEliminacion} className={styles.confirmButton}>
                Confirmar
              </button>
              <button onClick={cancelarEliminacion} className={styles.cancelButton}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EliminarProducto;
