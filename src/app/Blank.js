import React from "react";
import image_blank from "../assets/img/image_blank.png";
import "./Blank.css";

const BlankComponent = () => {
  return (
    <div className="container-blank">
      <p className="p-text">¡Crea tu primer TODO!</p>
      <img  className="imagen" src={image_blank} alt="TODO" />
    </div>
  );
};
export { BlankComponent };
