import React from "react";
import "./Card3.css";
import sfondo from "./assets/gioconline.jpg";

function Card3() {
  return (
    <div
      className="card3-container"
      style={{ backgroundImage: `url(${sfondo})` }}
    >
      <h2>Sito di videogames</h2>
      <p>
        Questo progetto mostrerà come ho realizzato questo sito web con l'utilizzo di HTML5, CSS3, Javascript
      </p>
    </div>
  );
}

export default Card3;
