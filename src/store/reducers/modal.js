import { MODAL_OPEN, MODAL_CLOSE } from '../constants';

const initialState = {
    isOpen: false,
}

const modalReducer = (state = initialState, action) => {

    switch(action.type) {
        case MODAL_OPEN:
            return {
                isOpen: true,
            }

        case MODAL_CLOSE: 
            return {
                isOpen: false,
            }

        default: 
            return state;
    }
    
}

export default modalReducer;