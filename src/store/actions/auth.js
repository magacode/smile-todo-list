import { AUTH_USER_AUTHORIZATION, AUTH_USER_DEAUTORIZATION } from '../constants';

const authUserAuthorization = () => {
    localStorage.setItem('autorization');

    return {
        type: AUTH_USER_AUTHORIZATION,
        payload: localStorage.getItem('autorization'),
    }
}

const authUserDeautorization = () => {
    localStorage.removeItem('autorization');

    return {
        type: AUTH_USER_DEAUTORIZATION,
        payload: localStorage.getItem('autorization'),
    }
}

export {
    authUserAuthorization,
    authUserDeautorization,
}