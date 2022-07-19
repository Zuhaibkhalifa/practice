import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Hello/Home";
import Name from "./Name/Name";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <Name />
  </React.StrictMode>
);
