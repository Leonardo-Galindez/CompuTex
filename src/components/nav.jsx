import React from 'react';
import '../styles/nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu-item"><a href="#">Inicio</a></li>
        <li className="menu-item"><a href="#">Productos</a></li>
        <li className="menu-item"><a href="#">Contáctanos</a></li>
        <li className="menu-item"><a href="#">Acerda De</a></li>
      </ul>
    </nav>
  );
}

export default Nav; // Exportación por defecto
