import React from "react";
import { HomePage } from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

const HatsPage = () => (
  <div>
    <h1>This is hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route exact path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
