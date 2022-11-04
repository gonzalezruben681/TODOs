import React, { useContext } from 'react';
import '../styles_components/todoCounter.css';

export function TodoCounter({ totalTodos, 
  completedTodos, loading}) {

  return (
    <div className={`container-counter ${!!loading && "todoCount--loading"}`}>
      <h1 className="title">Lista de Tareas</h1>
      <h2 className="todo-counter">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </div>
  );
}
// export { TodoCounter };
