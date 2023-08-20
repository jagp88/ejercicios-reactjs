import React from 'react';
import Navbar from './components/Navbar'; // Importar el componente Navbar para la barra de navegación
import TaskApp from './components/TaskApp'; // Importar el componente TaskApp para la aplicación principal

// Función de componente App que representa la aplicación principal
function App() {
  return (
    <div className="App">
      {/* Mostrar la barra de navegación */}
      <Navbar />
      {/* Mostrar la aplicación principal */}
      <TaskApp />
    </div>
  );
}

export default App;