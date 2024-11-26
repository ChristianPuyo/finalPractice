import React, { useEffect } from 'react';
import useProductStore from '../../store/productoStore';
import styles from './productList.module.css';  // Estilos para la lista de productos
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const { fetchProducts, products, deleteProductByCode } = useProductStore();  // Accedemos a los métodos y estados de productos

  // Navegar al inicio
  const volverAInicio = () => {
    navigate("/");
  };

  // Cargar productos cuando el componente se monta
  useEffect(() => {
    fetchProducts();  // Fetch de productos al cargar el componente
  }, []);

  // Manejo de eliminación de producto
  const handleDelete = (codigo) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      deleteProductByCode(codigo);  // Eliminamos el producto por Código
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
              <th>Código</th> {/* Cambié ID por Código */}
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.codigo}> {/* Cambié el key por 'codigo' */}
                <td>{product.codigo}</td>  {/* Mostrar el Código del producto */}
                <td>{product.name}</td>  {/* Mostrar el nombre del producto */}
                <td>{product.price}</td>  {/* Mostrar el precio del producto */}
                <td>{product.category}</td>  {/* Mostrar la categoría del producto */}
                <td>
                  <button onClick={() => handleDelete(product.codigo)} className={styles.deleteButton}> {/* Pasamos el 'codigo' a la función de eliminación */}
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
