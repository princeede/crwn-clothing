import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // const { name, value } = event.target;
    const { email, password, confirmPassword, displayName } = this.state;

    if (!password || !confirmPassword) {
      alert(`Password cannot be empty`);
      return;
    }

    if (password !== confirmPassword) {
      alert(`Pasword don't match`);
      return;
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(`From the user -`,userAuth);
      await createUserProfileDocument(userAuth.user, { displayName });
    } catch (error) {
      if (error.code && error.code === "auth/weak-password") {
        alert(error.message ?? `Password is too weak`);
        return;
      }
      alert(error.message ?? `Error creating user data.`);
      console.error(error);
      return;
    }
    this.setState({
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    });
  };

  render() {
    const { email, password, displayName, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1>I do not have an account</h1>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
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
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Conform Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In With Google
            </CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
