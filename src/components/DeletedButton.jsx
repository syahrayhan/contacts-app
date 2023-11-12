/* eslint-disable no-unused-vars */
import React from "react";

/* eslint-disable react/prop-types */
function DeletedButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeletedButton;