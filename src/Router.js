import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WalkleMapPage from "./pages/WalkleMapPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Auth from "./hoc/auth";
import ProjectPage from "./pages/ProjectPage";
import ProfilePage from "./pages/ProfilePage";
import AddProjectPage from "./pages/AddProjectPage";
import ProjectProfilePage from "./pages/ProjectProfilePage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, false)} />
      <Route exact path="/walklemap" component={Auth(WalkleMapPage, false)} />
      <Route exact path="/signin" component={Auth(SignInPage, false)} />
      <Route exact path="/signup" component={Auth(SignUpPage, false)} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route path={"/projects/:id"} component={ProjectProfilePage} />
      <Route exact path="/profile" component={Auth(ProfilePage, false)} />
      <Route exact path="/addproject" component={Auth(AddProjectPage, false)} />
      <Route>404 not found</Route>
    </Switch>
  );
};

export default Router;
