// Componente que maneja la lógica del programa de tareas

import React, { useState } from 'react';
import TaskList from './TaskList'; // Importar el componente TaskList para mostrar la lista de tareas
import './TaskApp.css'; // Importar los estilos CSS específicos para este componente

// Componente TaskApp que representa la aplicación principal
const TaskApp = () => {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
  const [newTask, setNewTask] = useState(''); // Estado para la nueva tarea

  // Función para agregar una nueva tarea a la lista
  const addTask = () => {
    if (newTask.trim() !== '') { // Verificar si la tarea no está en blanco
      setTasks([...tasks, { text: newTask, completed: false }]); // Agregar la nueva tarea al estado
      setNewTask(''); // Limpiar el campo de entrada de la tarea
    }
  };

  // Función para eliminar una tarea de la lista
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filtrar las tareas para eliminar la seleccionada
    setTasks(updatedTasks); // Actualizar el estado con las tareas actualizadas
  };

  // Función para cambiar el estado de completado/no completado de una tarea
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ); // Mapear a través de las tareas y actualizar el estado de completado
    setTasks(updatedTasks); // Actualizar el estado con las tareas actualizadas
  };

  // Función para manejar la pulsación de tecla (Enter) en el campo de entrada
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { // Verificar si se presionó la tecla Enter
      addTask(); // Llamar a la función para agregar una tarea
    }
  };

  return (
    <div className="TaskApp">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        {/* Campo de entrada para la nueva tarea */}
        <input 
          type="text"
          className="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress} // Asignar la función para manejar la pulsación de tecla
          placeholder="Nueva tarea..."
        />
        {/* Botón para agregar una nueva tarea */}
        <button className="add-button" onClick={addTask}>
          Agregar tarea
        </button>
      </div>
      {/* Mostrar la lista de tareas utilizando el componente TaskList */}
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;