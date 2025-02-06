import React, { useEffect, useRef, useState } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [otpFields, setotpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  useEffect(() => {
    ref.current[0].focus();
  }, []);

  // console.log(otpFields);
  const handleKeyDown = (e, index) => {
    const key = e.key;
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }
    const copyOtpFields = [...otpFields];
    if (key === "Backspace") {
      copyOtpFields[index] = "";
      if (index > 0) ref.current[index - 1].focus();
      setotpFields(copyOtpFields);
      return;
    }
    if (isNaN(key)) {
      return;
    }
    console.log(key);

    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    setotpFields(copyOtpFields);
  };

  const handleChange=()=>{

  }

  return (
    <div className="container">
      {otpFields.map((value, index) => {
        return (
          <input
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="text"
            value={value}
            key={index}
            onChange={()=>handleChange()}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
