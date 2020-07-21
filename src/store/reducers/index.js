import { combineReducers } from 'redux';

import authReducer from './auth';
import modalReducer from './modal';
import taskReducer from './task';

export default combineReducers ({
    authReducer,
    modalReducer,
    taskReducer,
});