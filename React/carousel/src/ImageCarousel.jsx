import React, { useEffect, useRef, useState } from "react";
import data from "./data.json";
const DATA_LENGTH = data.length;
const ImageCarousel = () => {
  let ref = useRef(null);
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index == DATA_LENGTH - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => {
        if (prevIndex == DATA_LENGTH - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }
  };
  const handlePrevious = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => (ref.current = setInterval(handleNext, 1000))}
      className="container"
    >
      <div className="left-btn" onClick={handlePrevious}>
        {"<"}
      </div>
      <img src={data[index].download_url} alt="" />
      <div className="right-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
};

export default ImageCarousel;
