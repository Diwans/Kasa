import React from "react";
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Logement from './pages/Logement/Logement';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/logement/:id" element={<Logement/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  };

export default App;