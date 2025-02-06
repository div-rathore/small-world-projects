import React, { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Modal = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  console.log(modalRef);
  
  useClickOutside(modalRef, closeModal);
  if (!isOpen) {
    return null;
  }

  return (
    <div ref={modalRef} className="modal-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis pariatur inventore delectus dolore culpa ducimus ad reiciendis
        rerum voluptatum velit eius vel explicabo, ipsam iste quidem ipsum dicta
        cupiditate.
      </p>
      <button onClick={closeModal}>close</button>
    </div>
  );
};

export default Modal;
