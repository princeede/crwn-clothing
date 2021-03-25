import React from "react";
import { HomePage } from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth } from "./firebase/firebase.utils";

const HatsPage = () => (
  <div>
    <h1>This is hats page</h1>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route path="/shop/hats" component={HatsPage} />
          <Route exact path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
