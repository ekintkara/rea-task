import React, { useState } from "react";
import { Input, Button } from "antd";

const PowerNumbers = () => {
  const [X, setX] = useState();
  const [N, setN] = useState();
  const [result, setResult] = useState();

  const Calculate = () => {
    calExponential(X, N);
    setResult(calExponential(X,N))
    console.log(calExponential(X, N));
  };

  const calExponential = (x, n) => {
    if (n === 0) return 1;

    if (x === 0) return 0;

    return x * calExponential(x, n - 1);
  };

  const handleX = (e) => {
    setX(e.target.value);
  };
  const handleN = (e) => {
    setN(e.target.value);
  };

  return (
    <>
      <div className="container">
        <header className="header">ÜSTEL İFADE HESAPLAMA</header>
        <div className="input-container">
          <Input placeholder="SAYI" onChange={handleX} />

          <Input placeholder="ÜSTEL SAYI" onChange={handleN} />

          <Button type="primary" onClick={Calculate}>
            HESAPLA
          </Button>
        </div>
        <div className="result-container" >
        {result && (<h1 >{result}</h1>) }
       </div>
      </div>
    </>
  );
};
export default PowerNumbers;
