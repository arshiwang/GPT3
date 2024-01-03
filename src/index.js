import React from "react";
import ReactDom from "react-dom";
import { StrictMode } from "react";

import "./index.css";
import App from "./App";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
