import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import Form from "./pages/Form/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
