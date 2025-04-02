import { useState } from "react";
import "./Contador.css";

const Contador = () => {
  const [valorContador, SetvalorContador] = useState(0);

  const onClickContador = () => {
    SetvalorContador(valorContador + 1);
  };

  const onClickSubtrator = () => {
    SetvalorContador(valorContador - 1);
  };

  return (
    <div>
      <button onClick={onClickContador}>+1</button>
      <button onClick={onClickSubtrator}>-1</button>
      <p style={{ color: "#f2f" }}>{valorContador}</p>
      {valorContador < 0 ? (
        <p style={{ color: "red" }}>Valor Negativo</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Contador;
