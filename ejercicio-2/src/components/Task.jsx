// Componente de la tarea individual

import React from 'react';

const Task = ({ task, index, toggleTask, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="button-container">
        <button
          className="completed-button"
          onClick={() => toggleTask(index)}
        >
          {task.completed ? 'Marcar como no completada' : 'Marcar como completada'}
        </button>
        <button className="delete-button" onClick={() => deleteTask(index)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;