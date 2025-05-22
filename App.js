import React, { useState } from "react";
import Navbar from "./Navbar";
import Progetti from "./Progetti";
import Contatti from "./Contatti";
import SuDiMe from "./SuDiMe";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [sezione, setSezione] = useState("");

  const cambiaSezione = (nomeSezione) => {
    setSezione(nomeSezione);
  };

  const welcomeTitle = (
    <h2 className="welcome-title">
      Benvenuto
    </h2>
  );

  const welcomeMessage = (
    <p className="welcome-paragraph">
      Questo è il mio inizio per avviare la mia carriera da sviluppatore <br />
      <br />
      Qui troverai una selezione accurata dei miei progetti,
      approfondimenti sul mio percorso e i canali per entrare in contatto.
      Ti invito a scoprire come la passione e la competenza si intrecciano
      nel mio lavoro.
    </p>
  );

  return (
    <div className="app-container">
      <Navbar cambiaSezione={cambiaSezione} />

      {sezione === "" && (
        <div className="home-section">
          {welcomeTitle}
          {welcomeMessage}
        </div>
      )}

      <div className="content-container">
        {sezione === "progetti" && <Progetti />}
        {sezione === "contatti" && <Contatti />}
        {sezione === "sudime" && <SuDiMe />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
