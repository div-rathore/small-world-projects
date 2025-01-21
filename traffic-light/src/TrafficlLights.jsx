import React, { useEffect, useState } from "react";
import Signal from "./Signal";

const TrafficlLights = ({ lights = ["green", "yellow", "red"] }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % lights.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {lights.map((light, index) => {
        return <Signal isActive={active == index} light={light} key={index} />;
      })}
    </>
  );
};

export default TrafficlLights;
