import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

const PrivateRoute = ({ autorization, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={({ location }) => {
            return userIsAuthorized 
                                    ?
                                        <Component />
                                    :
                                        <Redirect to={{ pathname="/login", state={ from: location }, }} /> 
        }} />
    );
}

const mapStateToProps = () => {
    return {
        autorization,
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);