import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WalkleMapPage from "./pages/WalkleMapPage";
import SignInPage from "./pages/SignInPage";
import Auth from "./hoc/auth";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Auth(LandingPage, false)} />
            <Route
                exact
                path="/walklemap"
                component={Auth(WalkleMapPage, true)}
            />
            <Route exact path="/signin" component={Auth(SignInPage, false)} />
            <Route path="/">404 not found</Route>
        </Switch>
    );
};

export default Router;
