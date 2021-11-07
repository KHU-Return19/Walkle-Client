import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WalkleMapPage from './pages/WalkleMapPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/walklemap" component={WalkleMapPage} />
            <Route path="/">404 not found</Route>
        </Switch>
    )
}

export default Router;
