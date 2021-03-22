import React from "react";
import { HomePage } from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>This is hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={HatsPage} />
        <Route exact={true} path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
