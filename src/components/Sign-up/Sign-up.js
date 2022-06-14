import React from "react";

import FormInput from "../Form-input/Form-input";

import CustomButton from "../Custom-button/Custom-button";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utility";

import "./Sign-up.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confrimPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confrimPassword } = this.state;
    if (password !== confrimPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confrimPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confrimPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">i do not have a acccount</h2>
        <span>sign up with your email and password</span>
        <form>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confrimPassword"
            value={confrimPassword}
            label="Confrim Password"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit" onClick={this.handleSubmit}>
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
