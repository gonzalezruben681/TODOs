import React, { useState, useContext } from 'react';
import './form.css';

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = (event) => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue) {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
