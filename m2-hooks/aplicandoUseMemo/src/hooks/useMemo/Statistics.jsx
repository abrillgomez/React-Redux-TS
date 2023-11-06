import { useState, useMemo } from "react";
import { data } from "../../database";

const average = (list) => {
  console.log("Calculando Average");
  const suma = list.reduce((a, b) => a + b.amount, 0);
  return `El promedio es ${suma / list.length}`;
};

export const Statistics = () => {
  const [show, setShow] = useState(false);

  const averageMemo = useMemo(() => average(data), []);
  
  console.log("Renderizado de Statistics");

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2>Statistics {averageMemo}</h2>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};
