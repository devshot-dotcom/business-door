import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";
import "normalize.css";
import "./sass/index.scss";

// Set default theme if not already set.
localStorage.getItem("doorTheme") || localStorage.setItem("doorTheme", "light");

// Apply the set theme.
localStorage.getItem("doorTheme") === "dark" &&
  document.body.setAttribute("data-theme", "dark");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/account-creation" element={<Register />} />
      <Route path="/auth/recover-password" element={<Recover />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
