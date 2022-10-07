import React, { useContext } from 'react';
// Importamos nuestro contexto
import { TodoContext } from '../todo_context/todoContext.js';
import { TodoCounter } from '../components/TodoCounter.js';
import { TodoSearch } from '../components/TodoSearch.js';
import { TodoItem } from '../components/TodoItem.js';
import { TodoList } from '../components/TodoList.js';
import { TaskList } from './TaskListLoader.js';
import { BlankComponent } from './Blank.js';
import '../style.css';

export default function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {/* Podemos acceder a nuestro contexto con el consumer */}
      <TodoList>
        {/* //Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando
        lo sdatos */}
        {loading &&
          new Array(4).fill().map((item, index) => <TaskList key={index} />)}
        {/* //Si terminó de cargar y no existen TODOs, se muestra un mensaje para
        crear el primer TODO */}
        {!loading && !searchedTodos.length && <BlankComponent />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          ></TodoItem>
        ))}
      </TodoList>
    </React.Fragment>
  );
}
