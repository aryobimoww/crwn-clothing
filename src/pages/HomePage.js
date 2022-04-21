import React from "react";
import "./HomePage.scss";
import "../components/directory/directory";
import Directory from "../components/directory/directory";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
