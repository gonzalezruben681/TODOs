import React, { useContext } from 'react';
import { TodoContext } from '../todo_context/todoContext.js';
import '../styles_components/todoCounter.css';

export function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <div className="container-counter">
      <h1 className="title">Lista de Tareas</h1>
      <h2 className="todo-counter">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </div>
  );
}
// export { TodoCounter };
