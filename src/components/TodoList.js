import React from 'react';
import '../styles_components/todoList.css';

export function TodoList(props) {
  return (
    <section style={{ padding: '3rem' }}>
      <ul>{props.children}</ul>
    </section>
  );
}
