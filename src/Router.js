import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WalkleMapPage from "./pages/WalkleMapPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Auth from "./hoc/auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, false)} />
      <Route exact path="/walklemap" component={Auth(WalkleMapPage, true)} />
      <Route exact path="/signin" component={Auth(SignInPage, false)} />
      <Route exact path="/signup" component={Auth(SignUpPage, false)} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
