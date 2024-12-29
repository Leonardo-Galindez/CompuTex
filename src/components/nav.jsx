import React from 'react';
import '../styles/nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu-item">Inicio</li>
        <li className="menu-item">Productos</li>
        <li className="menu-item">Contáctanos</li>
        <li className="menu-item">Acerca De</li>
      </ul>
    </nav>
  );
}

export default Nav; // Exportación por defecto
