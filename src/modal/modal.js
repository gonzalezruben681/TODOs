import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import './modal.css';

function Modal({ children }) {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="modal_background">{children}</div>,
    document.getElementById('modal')
  );
}

export { Modal };
