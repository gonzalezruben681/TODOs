import React from 'react';
import '../styles_components/createTodoButton.css';

export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="button button-movil" onClick={onClickButton}>
      Agregar Tarea
    </button>
  );
}
