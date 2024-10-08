import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./styles/main.scss";

import App from "./App";
import UserContext from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContext>
        <App />
      </UserContext>
    </Router>
  </React.StrictMode>
);
