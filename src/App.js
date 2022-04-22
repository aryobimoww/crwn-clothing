import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
