import React, { useState } from "react";

function PixelToRemConverter() {
  const [pixelValue, setPixelValue] = useState("");
  const [remValue, setRemValue] = useState("");

  const handlePixelChange = (event) => {
    const pixelValue = event.target.value;
    setPixelValue(pixelValue);
    setRemValue(pixelValue / 16);
  };

  const handleRemChange = (event) => {
    const remValue = event.target.value;
    setRemValue(remValue);
    setPixelValue(remValue * 16);
  };

  return (
    <>
    <h3 style={{textAlign:'center'}}>PX to REM converter </h3>
    <div style={{display:'flex', justifyContent:'center', gap:'1rem'}}>

      <label style={{textAlign:'center'}}>
        Pixels <br/>
        <input type="number" value={pixelValue} onChange={handlePixelChange} />
      </label>
      
      <label style={{textAlign:'center'}}>
        Rem <br/>
        <input type="number" value={remValue} onChange={handleRemChange} />
      </label>
      
    </div>
    </>
  );
}

export default PixelToRemConverter;
