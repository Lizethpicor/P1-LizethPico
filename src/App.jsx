import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación inputs
    if (
      input1.trim().length < 3 ||
      input1.trim()[0] === " " ||
      input2.length < 6
    ) {
      setError("Por favor chequea que la información sea correcta");
      setSuccess(false);
      return;
    }

    // Validacion exitosa
    setSuccess(true);
    setError("");
  };

  return (
    <div>
      <h1 className="title">¿Cuál es tu animal favorito?</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Escribe tu nombre"
              className="long-input"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Ingresa el nombre de tu animal favorito"
              className="long-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
