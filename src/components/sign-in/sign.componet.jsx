import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passwprd: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const { name, value } = event.target;
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" value="Submit">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
