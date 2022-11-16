import React from 'react';
import '../styles_components/todoItem.css';

export function TodoItem(props) {
  return (
    <div className="task-item-container">
      <label
        className={`content-input ${props.onComplete && 'content-input-active'}`}
        // className={'content-input'}
        onClick={props.onComplete}
      >
        <input type="checkbox" onChange={props.onComplete}  />
        <i></i>
      </label>
      <div className="body-item-task">
        <p className={`${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="eliminar" onClick={props.onDelete}>
          Eliminar
        </span>
      </div>
    </div>
  );
}
