import React from 'react';
import AppUI from './app/AppUI.js';
import { TodoProvider } from './todo_context/todoContext.js';

export default function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
