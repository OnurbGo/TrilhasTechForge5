import { useState } from "react";

const ToggleVisibilidade = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setNome(input);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Enviar</button>
      <button onClick={toggleVisibility}>
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>
      {isVisible && <p>{nome}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
