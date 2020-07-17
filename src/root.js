import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Root = (props) => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact >
                <Route path='/login'></Route>
                <Route path='/reset-password'></Route>
            </Switch>
        </Router>
    );
}

export default Root;