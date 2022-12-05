import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import Global from "./styles/global";
import { Reset } from "./styles/reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Global />
      <Reset />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
