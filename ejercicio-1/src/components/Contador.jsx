import React, { useState } from 'react';
import './Contador.css'; // Importamos el archivo de estilos

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    // Aplicamos la clase CSS 'contador-container' para centrar y estilizar el contenedor
    <div className="contador-container">
      {/* Título del contador */}
      <h1 className="contador-heading">Contador Simple</h1>
      {/* Mostrar el valor del contador */}
      <p className="contador-value">Valor del contador: {contador}</p>
      {/* Botones de incremento y decremento */}
      <div className="contador-buttons">
        {/* Botón para incrementar */}
        <button className="contador-button" onClick={incrementarContador}>
          Incrementar
        </button>
        {/* Botón para decrementar */}
        <button className="contador-button" onClick={decrementarContador}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Contador;