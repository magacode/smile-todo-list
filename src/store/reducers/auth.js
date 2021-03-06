import { AUTH_USER_AUTHORIZATION, AUTH_USER_DEAUTORIZATION } from '../constants';

const initialState = {
    autorization: localStorage.getItem('autorization'),
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH_USER_AUTHORIZATION:
            return {
                autorization: action.payload,
            }

        case AUTH_USER_DEAUTORIZATION:
            return {
                autorization: action.payload,
            }

        default: 
            return state;
    }

}

export default authReducer;