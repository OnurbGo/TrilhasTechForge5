import { useState } from "react";

const Saudacao = () => {
  const [nome, setNome] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setNome(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Enviar</button>
      {nome && <p>Olá, {nome}!</p>}
    </div>
  );
};

export default Saudacao;
