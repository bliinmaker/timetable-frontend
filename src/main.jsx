import React from "react";
import { createRoot } from "react-dom";
import { App } from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement.hasChildNodes()) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

