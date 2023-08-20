import React from 'react';
import './Navbar.css'; // Importamos el archivo de estilos
import ticongleLogo from './ticongle.png'; // Importamos la imagen de logo

const Navbar = () => {
  return (
    // Aplicamos la clase CSS 'navbar' para el contenedor del Navbar
    <nav className="navbar">
      {/* Mostramos la imagen del logo */}
      <img
        src={ticongleLogo} // Utilizamos la imagen importada
        alt="Logo de Ticongle Academy"
        className="logo"
      />
      {/* Mostramos el título */}
      <h1 className="titulo">Ticongle Academy</h1>
    </nav>
  );
};

export default Navbar;