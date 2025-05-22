import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // <-- Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Avvolgi l'app qui */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
