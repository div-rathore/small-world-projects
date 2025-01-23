import React, { useRef, useState } from "react";

const DragAndDrop = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();
  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };
  const handleDrop = (e,targetContainer)=>{
const item = dragItem.current;
const sourceContainer = dragContainer.current;
setData((prev)=>{
    const newData = {...prev}
     newData[sourceContainer] = newData[sourceContainer].filter((i)=> i!==item)
     newData[targetContainer] = [...newData[targetContainer], item]
     return newData;
})

  }
  return (
    <div className="container">
      {Object.keys(data).map((container, index) => {
        return (
          <div onDrop={(e)=>handleDrop(e,container)} className="box" key={index} onDragOver={(e)=>e.preventDefault()}>
            {" "}
            <h2>{container}</h2>
            {data[container].map((item, ind) => {
              return (
                <div
                  draggable
                  className="inner-box"
                  key={ind}
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;
