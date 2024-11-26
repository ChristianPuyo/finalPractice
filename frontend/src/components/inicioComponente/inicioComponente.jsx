import React from 'react';
import style from "./inicio.module.css";
import { useNavigate } from 'react-router-dom';

const InicioComponente = () => {
  const navigate = useNavigate();

  const iraEdit = () => {
    navigate("/userEdit");
  };
  const handleClick = () => {
    navigate("/userList");
  };
  const handlenviaraRegistro = () => {
    navigate("/user");
  };
  const eliminarUsuario = () => {
    navigate("/eliminarUsuario");
  };

  return (
    <div className={style.inicioPadre}>
      <nav className={style.nav}>
        <h4 className={style.title}>IESTP Suiza -EJERCICIO DE CRUD</h4>
      </nav>
      <div className={style.botones}>
        <button className={style.button} onClick={handlenviaraRegistro}>
          Agregar Producto
        </button>
        <button className={style.button} onClick={iraEdit}>
          Editar Producto -NO FUNCIONA
        </button>
        <button className={style.button} onClick={eliminarUsuario}>
          Eliminar Producto
        </button>
        <button className={style.button} onClick={handleClick}>
          Listar Producto
        </button>
      </div>
    </div>
  );
};

export default InicioComponente;
