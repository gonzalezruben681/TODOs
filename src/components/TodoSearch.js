import React, { useContext } from 'react';
import { Modal } from '../modal/modal.js';
import { TodoForm } from '../todo_form/form.js';
import '../styles_components/todoSearch.css';
import { CreateTodoButton } from './CreateTodoButton.js';

export function TodoSearch({searchValue, setSearchValue, openModal, setOpenModal,addTodo , loading}) {

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
        disabled={loading}
      />
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}
