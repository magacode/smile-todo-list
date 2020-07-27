import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import PrivateRoute from './components/private-route';
import App from './app';
import LoginPage from './login-page';
import ResetPasswordPage from './reset-password-page';
import AboutPage from './pages/about-page';
import PricesPage from './pages/prices-page';
import Footer from './components/footer';

const Root = (props) => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <PrivateRoute path="/app" component={App} />
                <Route path='/login' component={LoginPage} />
                <Route path='/reset-password' component={ResetPasswordPage} />
                <Route path='/about/' component={AboutPage} />
                <Route path='/prices/' component={PricesPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Root;