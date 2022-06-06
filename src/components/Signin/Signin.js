import React from "react";
import FormInput from "../Form-input/Form-input";
import CustomButton from "../Custom-button/Custom-button";
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
        <h2>alredy have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.name}
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

          <CustomButton type="submit" value="submit">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default Signin;
