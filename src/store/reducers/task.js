import { TASK_ADD } from '../constants';

const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {

        case TASK_ADD: 
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        default:
            return state;

    }

}

export default taskReducer;