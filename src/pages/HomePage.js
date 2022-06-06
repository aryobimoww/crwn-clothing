import React from "react";
import "./HomePage.scss";
import "../components/directory/directory";
import Directory from "../components/directory/directory";
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
