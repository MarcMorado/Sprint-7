import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";


// import Prices from "./components";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Welcome />} />
        <Route path="Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
