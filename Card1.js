import React from "react";
import "./Card1.css";
import sfondo from "./assets/tic-tac-toe.jpg";

function Card1() {
  return (
    <a
      href="https://www.youtube.com/watch?v=mWRsgZuwf_8"
      target="_blank"
      rel="noopener noreferrer"
      className="card1-container"
      style={{ backgroundImage: `url(${sfondo})` }}
    >
      <h2>Tic-Tac-Toe (Tris)</h2>
      <p>
        Questo è il progetto Tic Tac Toe, dove spiego come ho realizzato il gioco con l'uso di React.
      </p>
    </a>
  );
}

export default Card1;
