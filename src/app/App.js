import React from 'react';
import { useTodos } from './useTodos.js';
import { TodoCounter } from '../components/TodoCounter.js';
import { TodoSearch } from '../components/TodoSearch.js';
import { TodoItem } from '../components/TodoItem.js';
import { TodoList } from '../components/TodoList.js';
import { TaskListLoading } from './TaskListLoader.js';
import { BlankComponent } from './Blank.js';
import './style.css';
import TodoHeader from '../components/TodoHeader.js';
import ChangeAlert from '../components/ChangeAlert.js';
function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    openModal,
    addTodo,
    setOpenModal,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
      {/* Composición de componentes */}
    <TodoHeader loading={loading}>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} 
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}
        openModal={openModal} addTodo={addTodo}
        setOpenModal={setOpenModal} 
        />
    </TodoHeader>
    {/* Podemos acceder a nuestro contexto con el consumer */}
    <TodoList
    // patron render props
    error={error}
    loading={loading}
    searchedTodos={searchedTodos}
    totalTodos={totalTodos}
    searchText={searchValue}
    onError={()=> <p>Desespérate, hubo un error...</p>}
    onLoading={()=> new Array(4).fill().map((item, index) => <TaskListLoading key={index} />)}
    onEmptyTodos={()=><BlankComponent />}
    onEmptySearchResults={(searchText)=> <p>No hay resultados {searchText}</p>}
    // render ={(todo, index) => (
    //   <TodoItem
    //     key={index}
    //     text={todo.text}
    //     completed={todo.completed}
    //     onComplete={() => completeTodo(todo.text)}
    //     onDelete={() => deleteTodo(todo.text)}
    //   ></TodoItem>
    // )}
    >
      {/* patron render functions */}
      {(todo, index) => (
      <TodoItem
        key={index}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      ></TodoItem>
    )}
    </TodoList>
    <ChangeAlert sincronize={sincronizeTodos}/>
  </React.Fragment>
  );
}
export default App;