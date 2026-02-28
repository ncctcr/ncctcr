import React from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import Home from "./pages/home/home";
import System from "./pages/system/system";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<System />} />
    </Routes>
  );
}

export default App;
