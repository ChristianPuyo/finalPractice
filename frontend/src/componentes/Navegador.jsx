import React from 'react';
import { Link } from 'react-router-dom';
import stilo from './navegadorStilo.module.css'

const NavegadorIncicio = () => {
    return (
        <div >            
            <nav className={stilo.padre}>
                <Link to='/' className={stilo.link} > agregar al almacen</Link>
                <Link to='/producto' className={stilo.link}> agregar producto</Link>
                <Link to='/salida' className={stilo.link}> agregar salida de producto</Link>
                <Link to='/almacenList' className={stilo.link}> ver productos en el almacen</Link>
                <Link to='/salidaList' className={stilo.link}> ver productos en salidos</Link>
                <Link to='/productoList' className={stilo.link}> ver productos</Link>
            </nav>
        </div>
    );
}

export default NavegadorIncicio;