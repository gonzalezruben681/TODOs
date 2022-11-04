import React from 'react';
import '../styles_components/todoList.css';

export function TodoList(props) {
    /* esta variable nos permite validar si tenemos una render prop 
	o una render function */

  const renderFunc = props.children || props.render;
  return (
    <section className='TodoList-container' style={{ padding: '3rem' }}>
      {/* Aquí cambiamos el comportamiento de onEmptyTodos para
			que solo salga cuando no haya todos creados como tal, si hay
			TODO's creados no sale */}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {/*el operador !! Lo que hace es volver estricamente un valor en Booleano
Ejemplo */}
{/* Validamos si el resultado buscado coincide con alguno de
			los TODO's */}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      
      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
    </section>
  );
}
