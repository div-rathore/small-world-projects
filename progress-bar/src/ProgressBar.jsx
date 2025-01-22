import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevBar) => {
        if (prevBar >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevBar +5, 100)
      });
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progress"
      ></div>
    </div>
  );
};

export default ProgressBar;
