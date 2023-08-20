import React from 'react';
import Contador from './components/Contador';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      {/* Se muestra el componente Navbar en la parte superior */}
      <Navbar />
      {/* Se muestra el componente Contador debajo del Navbar */}
      <Contador />
    </div>
  );
};

export default App;