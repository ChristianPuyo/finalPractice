import React, { useEffect } from 'react';
import useProductStore from '../../store/productoStore';
import styles from './productList.module.css';  // Estilos para la lista de productos
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const { fetchProducts, products, deleteProduct } = useProductStore();  // Accedemos a los métodos y estados de productos

  // Navegar al inicio
  const volverAInicio = () => {
    navigate("/");
  };

  // Cargar productos cuando el componente se monta
  useEffect(() => {
    fetchProducts();  // Fetch de productos al cargar el componente
  }, []);

  // Manejo de eliminación de producto
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      deleteProduct(id);  // Eliminamos el producto por ID
    }
  };

  return (
    <div className={styles.fondo_general}>
      <div className={styles.listContainer}>
        <button onClick={volverAInicio} className={styles.backButton}>Volver a inicio</button>
        <h1 className={styles.title}>Lista de Productos</h1>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>  {/* Mostrar el ID del producto */}
                <td>{product.name}</td>  {/* Mostrar el nombre del producto */}
                <td>{product.price}</td>  {/* Mostrar el precio del producto */}
                <td>{product.category}</td>  {/* Mostrar la categoría del producto */}
                <td>
                  <button onClick={() => handleDelete(product.id)} className={styles.deleteButton}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
