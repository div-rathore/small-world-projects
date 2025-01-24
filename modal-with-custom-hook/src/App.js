import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal';
import { useCallback, useRef, useState } from 'react';
import useClickOutside from './hooks/useClickOutside';

function App() {
  const [showModal,setShowModal] = useState(true)

  const handleClick = ()=>{
  setShowModal(true)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Show Modal</button>
     <Modal isOpen={showModal} closeModal={()=> setShowModal(false)}/>
    </div>
  );
}

export default App;
