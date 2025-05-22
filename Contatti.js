import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./Contatti.css";

function Contatti() {
  return (
    <div className="contatti-container">
      <h2>Contatti</h2>
      <ul className="contatti-list">
        <li>
          <FaEnvelope className="icon" />             {/* FaEvaloper serve per creare l'icona */} 
          <a href="mailto:cristian.bertolotti.94@gmail.com">
            cristian.bertolotti.94@gmail.com
          </a>
        </li>
        <li>
          <FaPhone className="icon" />
          <a href="tel:+393490933434">+39 349 093 3434</a>
        </li>
        <li>
          <FaLinkedin className="icon" />
          <a
            href="https://linkedin.com/in/cristian-bertolotti-6763b3201"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contatti;
