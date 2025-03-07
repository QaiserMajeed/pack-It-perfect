import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

// For server-side rendering/hydration
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // If the app was pre-rendered, hydrate it
  ReactDOM.hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  // Normal client-side rendering
  ReactDOM.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
}
