import React, { useEffect, useRef, useState } from "react";

const InteractiveShape = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );
  console.log(grid);
  const queue = useRef([]);
  const timerId = useRef([])
  const handleClick = (rowIdx, colIdx, flag) => {
   if(timerId.current.length>0 && flag){
    return;
   }
    setGrid((prev)=>{
        const gridDeepCopy = prev.map((row) => [...row]);
        gridDeepCopy[rowIdx][colIdx] = flag;
        if(flag) queue.current.push([rowIdx, colIdx]);
        return gridDeepCopy
    });
  };
  useEffect(()=>{
console.log("queue",queue);

    if(queue.current.length === 18){
        queue.current.forEach(([rowIdx,colIdx], idx) => {
           timerId.current[idx]= setTimeout(() => {
                handleClick(rowIdx,colIdx, false)
                if(idx === timerId.current.length - 1){
                    timerId.current=[]
                }
            }, 1000*(idx+1));
            
        });
        queue.current=[]
    }
  },[grid])

  useEffect(() => {
    
  
    return () => {
      timerId.current.forEach((id)=>{
        clearTimeout(id)
      })
    }
  }, [])
  

  return (
    <div className="container">
      {grid.map((row, rowIdx) => {
        return row.map((cell, colIdx) => {
          return (
            <div
              className={`cell ${cell ? "active" : ""}`}
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx, true)}
            ></div>
          );
        });
      })}
    </div>
  );
};

export default InteractiveShape;
