import SignIn from "../../components/sign-in/sign-in.componet";
import SignUp from "../../components/sign-up/sign-up.componet";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
