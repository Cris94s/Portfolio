import React from "react";
import "./Card2.css";
import sfondo from "./assets/miaFoto.jpg";

function Card2() {
  return (
    <div
      className="card2-container"
      style={{ backgroundImage: `url(${sfondo})` }}
    >
      <h2>Il mio Portfolio</h2>
      <p>
        Questo progetto è proprio il mio portfolio, e mostrerò come l'ho realizzato usando la libreria react
      </p>
    </div>
  );
}

export default Card2;
