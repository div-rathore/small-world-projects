import React, { useState } from "react";
import Accordion from "./Accordion";
import data from "../data.json";

const Container = () => {
    const [showIndex, setShowIndex] = useState(-1)

    const handleQna = (index)=> {
        setShowIndex((prevValue)=>{
          if(  prevValue===index) return -1
          return index
        })
    }
  return (
    <div>
      {data.faq.map((obj, index) => {
        return <Accordion key={index} qna={obj} index={index} showAns={index===showIndex} handleQna={()=>handleQna(index)}/>;
      })}
    </div>
  );
};

export default Container;
