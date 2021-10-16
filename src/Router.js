import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/">404 not found</Route>
        </Switch>
    )
}

export default Router;
