import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import App2 from "./components/App2";
import Contact from "./components/Contact";


import { useNavigate } from "react-router-dom"; // Import useNavigate

function App() {
  return (
    <Router>
      <div>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
