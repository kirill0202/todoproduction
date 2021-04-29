import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginContainer } from '../container/LoginContainer';
import { RegistrationContainer } from '../container/RegistrationContainer';

import { HomePage } from './HomePage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/todo" exact><HomePage /></Route>
                <Redirect to="/todo" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/login" exact>
                    <LoginContainer />
                </Route>
                <Route path="/registration" exact>
                    <RegistrationContainer />
                </Route>
                <Redirect to="/login" />
            </Switch>
        )
    }
}