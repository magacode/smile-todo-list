import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ autorization, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={({ location }) => {
            
            return autorization 
                                ?
                                    <Component />
                                :
                                    <Redirect to={{ pathname: "/login", state: { from: location }, }} /> 
        }} />
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        autorization: authReducer.autorization,
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);