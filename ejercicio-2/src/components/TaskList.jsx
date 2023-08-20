// Componente de la lista de tareas

import React from 'react';
import Task from './Task'; // Importar el componente Task para cada tarea individual
import './TaskList.css'; // Importar los estilos CSS específicos para este componente

// Componente TaskList que representa la lista completa de tareas
const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="task-list"> {/* Lista no ordenada para mostrar las tareas */}
      {/* Mapear a través de las tareas y renderizar el componente Task para cada una */}
      {tasks.map((task, index) => (
        <Task
          key={index} // Clave única para cada tarea (index)
          task={task} // Proporcionar la información de la tarea al componente Task
          index={index} // Proporcionar el índice de la tarea para su identificación
          toggleTask={toggleTask} // Función para cambiar el estado de completado/no completado
          deleteTask={deleteTask} // Función para eliminar la tarea
        />
      ))}
    </ul>
  );
};

export default TaskList;