import React, { useRef, useState } from "react";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});
  const handleClose = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];

    setToasts((prevToasts) => {
      const filteredArray = prevToasts.filter((toast) => {
        return toast.id !== id;
      });
      return filteredArray;
    });
  };
  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toasts, { id, message, type }];
    setToasts(newToasts);
    timersRef.current[id] = setTimeout(() => handleClose(id), 5000);
  };
  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} Toast <span onClick={() => handleClose(id)}>x</span>
            </div>
          );
        })}
      </div>
      <button onClick={() => handleAdd("success", "success")} className="">
        Success
      </button>
      <button onClick={() => handleAdd("info", "info")} className="">
        Info
      </button>
      <button onClick={() => handleAdd("warning", "warning")} className="">
        Warning
      </button>
      <button onClick={() => handleAdd("error", "error")} className="">
        Error
      </button>
    </div>
  );
};

export default ToastContainer;
