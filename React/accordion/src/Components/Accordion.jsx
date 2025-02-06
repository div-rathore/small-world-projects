import React, { useState } from "react";

const Accordion = ({ qna, showAns, handleQna }) => {
    // const [show,setShow] = useState(false)
    // const handleClick=()=>{
        // setShow(!show);
        //  setIndex(index)
    // }
  return (
    <div className="accordion">
      <h3>{qna.question} <span onClick={handleQna}>{showAns? "-": "+"}</span></h3>
     { showAns ?  <p>{qna.answer}</p>: ''}
    </div>
  );
};

export default Accordion;
