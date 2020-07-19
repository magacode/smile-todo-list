import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/app';
import LoginPage from './login-page';
import ResetPasswordPage from './reset-password-page';

const Root = (props) => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/app" component={App} />
                <Route path='/login' component={LoginPage} />
                <Route path='/reset-password' component={ResetPasswordPage} />
            </Switch>
        </Router>
    );
}

export default Root;