import React from "react";
import FormInput from "../Form-input/Form-input";
import CustomButton from "../Custom-button/Custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utility";
import "./Signin.scss";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="signin">
        <h2 className="title">alredy have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default Signin;
