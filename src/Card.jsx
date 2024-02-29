import React from "react";

function Card({ input1, input2 }) {
  return (
    <div className="card-container">
      <p className="card-text">Hola, {input1}</p>
      <p className="card-text">Sabemos que tu animal favorito es: {input2}</p>
      <button className="card-button">{input2}</button>
    </div>
  );
}

export default Card;
