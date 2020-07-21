import { TASK_ADD, TASK_DELETE } from '../constants';

const initialState = {
    tasks: [
        // {id: 0, title: 'I am big title', descr: 'My text in descr block'}, 
        // {id: 1, title: 'I am big title', descr: 'My text in descr block'}, 
        // {id: 2, title: 'I am big title', descr: 'My text in descr block'}
    ],
}

const taskReducer = (state = initialState, action) => {

    switch(action.type) {
        case TASK_ADD: 
            return {
                ...state,
                tasks: action.payload,
            }

        case TASK_DELETE:
            return {
                ...state,
                tasks: action.payload,
            }

        default:
            return state;

    }

}

export default taskReducer;