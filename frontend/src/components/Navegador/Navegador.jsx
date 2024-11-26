import React, { useState } from 'react';
import './navegador.css';
import { Link } from 'react-router-dom';

const Navegador = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='navegador'>
            <div className='logoimg'>
                <img src={logo} alt="Logo" />
            </div>
            
            <nav className='menu'>
                <button onClick={toggleMenu} className='link-nav'>
                    DSI
                </button>
                {showMenu && (
                    <div className='dropdown-menu'>
                        <Link to='/' className='link-nav'>INICIO</Link>
                        <Link to='/productoList' className='link-nav'>Lista</Link>
                        
                        
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navegador;