import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';

import { authUserAuthorization } from '../store/actions';
import ContainerRow from '../components/container-row';

const LoginPage = ({ autorization, authUserAuthorization }) => {    
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/app" } };

    useEffect(() => {
        if (autorization) {
            history.replace(from, {...location.state})
        }
    }, [from, history, autorization])

    let authorizationManagement = () => {        
        authUserAuthorization();
    }

    return (
        <ContainerRow>
            <div className="col">
                <h1 className="mt-5 mb-4 text-center title-component">
                    Войти в личный кабинет
                </h1>
                <div className="card mt-5 wrapper-component">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    Мы никогда не передадим вашу электронную почту кому-либо еще.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Пароль</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Запомнить меня
                                </label>
                            </div>
                            <button type="submit" onClick={authorizationManagement} className="btn btn-primary">
                                Войти
                            </button>
                            <Link to="/reset-password" className="pl-2">
                                Забыли пароль?
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </ContainerRow>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return {
        autorization: authReducer.autorization,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authUserAuthorization: () => authUserAuthorization(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);