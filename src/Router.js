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
import ProjectDetailPage from "./pages/ProjectDetailPage";
import EditProjectPage from "./pages/EditProjectPage";
import CommunityPage from "./pages/CommunityPage";
import CreatorsPage from "./pages/CreatorsPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, false)} />
      <Route exact path="/walklemap" component={Auth(WalkleMapPage, false)} />
      <Route exact path="/creators" component={CreatorsPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route path={"/projects/:id"} component={ProjectDetailPage} />
      <Route exact path={"/project_edit/:id"} component={EditProjectPage} />
      <Route exact path="/community" component={CommunityPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route
        exact
        path="/add_project"
        component={Auth(AddProjectPage, false)}
      />
      <Route>404 not found</Route>
    </Switch>
  );
};

export default Router;
