import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes></Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
