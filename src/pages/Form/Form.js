import React from "react";
import Signin from "../../components/Signin/Signin";
import SignUp from "../../components/Sign-up/Sign-up";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form">
      <Signin />
      <SignUp />
    </div>
  );
};

export default Form;
