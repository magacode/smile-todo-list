import React from 'react';
import { Route } from 'react-router-dom'

const PrivateRoute = ({ userIsAuthorized, children, ...rest }) => {
    return (
        <Route {...rest} render={({ location }) => {
            return userIsAuthorized 
                                    ?
                                        children
                                    :
                                        <Redirect to={{ pathname="/login", state={ from: location }, }} /> 
        }} />
    );
}

export default PrivateRoute;