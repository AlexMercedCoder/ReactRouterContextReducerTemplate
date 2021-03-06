import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppState } from "./ctxandreducer";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <AppState>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AppState>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
