import React from 'react';
import Navbar from './components/Navbar'; // Importa el componente RegistrationForm
import RegistroForm from './components/RegistroForm'; // Importa el componente RegistrationForm

function App() {
  return (
    <div className="App">
      {/* Muestra el componente de Navbar */}
      <Navbar />
      {/* Muestra el componente de formulario */}
      <RegistroForm />
    </div>
  );
}

export default App;
