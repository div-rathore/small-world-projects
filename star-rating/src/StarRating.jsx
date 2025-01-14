import React, { useState } from "react";

const StarRating = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState();
//   console.log(starValue);

  return (
    <div className="container">
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span
            onMouseEnter={() => setHoverValue(index)}
            onMouseLeave={()=> setHoverValue(0)}
            className={hoverValue==0 && index <= starValue || index<=hoverValue ? "gold" : ""}
            key={index}
            onClick={() => setStarValue(index)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
