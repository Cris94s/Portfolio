import { FaHome } from "react-icons/fa";
import React, { useState } from "react";
import "./Navbar.css";
import miaFoto from "./assets/miaFoto.jpg";

function Navbar({ cambiaSezione }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div
          className="navbar-name-container"
          onClick={() => cambiaSezione("")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={miaFoto}
            alt="Foto personale"
            className="navbar-photo"
            onClick={(e) => {
              e.stopPropagation(); // evita conflitto con cambiasezione (ripassare)
              setShowModal(true);
            }}
          />
          <div className="navbar-name">Bertolotti Cristian</div>
        </div>

        <div className="navbar-links">
          {/* Pulsante Home con icona */}
          <button
            onClick={() => cambiaSezione("")}
            className="nav-link home-button"
          >
            <FaHome className="home-icon" /> Home
          </button>

          <button
            onClick={() => cambiaSezione("progetti")}
            className="nav-link"
          >
            Progetti
          </button>
          <button
            onClick={() => cambiaSezione("contatti")}
            className="nav-link"
          >
            Contatti
          </button>
          <button onClick={() => cambiaSezione("sudime")} className="nav-link">
            Su di me
          </button>
          <a
            href="/CV_Cirstian_Bertolotti_aGG.pdf"
            download
            className="nav-link cv-download"
          >
            CV Download
          </a>
        </div>
      </nav>

      {/* se vuoi ingfrandire la foto o meno */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content">
            <img src={miaFoto} alt="Foto Ingrandita" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
