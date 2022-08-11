import React from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "../components/Dashboard";

const Options = () => {
  return <Dashboard />
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
