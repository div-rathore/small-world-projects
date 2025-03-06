import React, { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;

    const copyTime = { ...time };
    copyTime[field] = value;
    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = copyTime.second % 60;
    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = copyTime.minute % 60;
    setTime(copyTime);
  };

  const handleStart = () => {
    if (
      time.hour.length === 0 &&
      time.minute.length == 0 &&
      time.second.length == 0
    ) {
      return;
    }
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({
      hour: "",
      minute: "",
      second: "",
    });
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const copyPrevTime = { ...prevTime };

          copyPrevTime.second--;
          if (copyPrevTime.second < 0) {
            copyPrevTime.minute--;
            copyPrevTime.second = 59;
            if (copyPrevTime.minute < 0) {
              copyPrevTime.hour--;
              copyPrevTime.minute = 59;
              if (copyPrevTime.hour < 0) {
                clearInterval(intervalRef.current);
                return { hour: "", minute: "", second: "" };
              }
            }
          }

          return copyPrevTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className="container">
      <div className="input-container">
        <input
          value={time.hour}
          disabled={isRunning}
          type="text"
          placeholder="hh"
          onChange={(e) => handleChange(e, "hour")}
        ></input>
        :
        <input
          value={time.minute}
          disabled={isRunning}
          type="text"
          placeholder="mm"
          onChange={(e) => handleChange(e, "minute")}
        ></input>
        :
        <input
          value={time.second}
          disabled={isRunning}
          type="text"
          placeholder="ss"
          onChange={(e) => handleChange(e, "second")}
        ></input>
      </div>
      <div className="button-container">
        <button onClick={handleStart} className="start">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
