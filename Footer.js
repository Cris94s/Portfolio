import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Cristian Bertolotti</p>
      <div className="footer-links">
        <a href="mailto:cristian.bertolotti.94@gmail.com">Email</a>
        <a
          href="https://linkedin.com/in/cristian-bertolotti-6763b3201"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Cris94s"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
