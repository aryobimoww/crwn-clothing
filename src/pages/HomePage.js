import React from "react";
import "./HomePage.scss";
import "../components/directory/directory";
import Directory from "../components/directory/directory";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const history = useNavigate();
  return (
    <div className="homepage">
      <button onClick={() => history("/hat")}>hat</button>
      <Directory />
    </div>
  );
};

export default HomePage;
