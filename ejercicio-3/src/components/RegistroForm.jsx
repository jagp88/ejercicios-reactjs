// RegistroForm.jsx

import React, { useState } from 'react';
import './RegistroForm.css'; // Importa el archivo de estilos CSS

const RegistrationForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Estado para almacenar los mensajes de error
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Estado para almacenar los datos registrados
  const [registeredData, setRegisteredData] = useState(null);

  // Manejador de cambio para actualizar el estado de los datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (formData.name === '') {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Correo electrónico inválido';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setRegisteredData(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {Object.keys(errors).length > 0 && <div className="error-blank-space"></div>}
        <button type="submit" className="submit-button">Registrar</button>
      </form>

      {registeredData && (
        <div className="registered-data-card">
          <h3>Datos Registrados:</h3>
          <p><strong>Nombre:</strong> {registeredData.name}</p>
          <p><strong>Correo Electrónico:</strong> {registeredData.email}</p>
          <p><strong>Contraseña:</strong> {registeredData.password}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;