import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Profile from "./pages/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import NavPan from './component/NavPane';
import HomePage from './pages/HomePage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <NavPan/>
        <Route path="/" exact component={HomePage} />
        <Route path="/Profile" exact component={Profile} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
