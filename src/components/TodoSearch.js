import React, { useContext } from 'react';
import { TodoContext } from '../todo_context/todoContext.js';
import { Modal } from '../modal/modal.js';
import { TodoForm } from '../todo_form/form.js';
import '../styles_components/todoSearch.css';
import { CreateTodoButton } from './CreateTodoButton.js';

export function TodoSearch() {
  const { searchValue, setSearchValue, openModal, setOpenModal } =
    useContext(TodoContext);
  function onSearchValueChange(event) {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className="container-search">
      <input
        className="search"
        type="text"
        value={searchValue}
        placeholder="Que tienes planeado para hoy ?"
        onChange={onSearchValueChange}
      />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}
