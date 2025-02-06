
import {  useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App">
 {show?  <ProgressBar/>:''}
<button onClick={()=> setShow(!show)}>toggle</button>
    </div>
  );
}

export default App;
