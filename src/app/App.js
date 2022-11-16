import React from 'react';
import './style.css';
import { BlankComponent } from './Blank.js';
import { TaskListLoading } from './TaskListLoader.js';
import { TodoCounter } from '../components/TodoCounter.js';
import { TodoItem } from '../components/TodoItem.js';
import { TodoList } from '../components/TodoList.js';
import { TodoSearch } from '../components/TodoSearch.js';
import { useTodos } from './useTodos.js';
import ChangeAlert from '../components/ChangeAlert.js';
import TodoHeader from '../components/TodoHeader.js';
function App() {
  
  const {
    state,
    stateUpdaters
  } = useTodos();

  const {
    completedTodos,
    error,
    loading,
    openModal,
    searchedTodos,
    searchValue,
    totalTodos,
  } = state;
  
  const {
    completeTodo,
    addTodo,
    deleteTodo,
    setOpenModal,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

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