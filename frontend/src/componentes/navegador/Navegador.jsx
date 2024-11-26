import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navegador.css';
// import logo from '../IMG/logoSUIZA.png';
// import { IoHome } from "react-icons/io5";IoHome

const Navegador = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <a href="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</a>
      <a href="/formproductos" className={location.pathname === '/formproductos' ? 'active' : ''}>Productos Form</a>
      <a href="/studentlist" className={location.pathname === '/' ? 'active' : ''}>Productos List</a>
      <div className='logos'>
        {/* <img src={logo} alt="Logo SUIZA" />  */}
      </div>
    </div>
  );
};

export default Navegador;
