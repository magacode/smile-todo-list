import { TASK_ADD, TASK_DELETE } from '../constants';

const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {
   
    switch(action.type) {

        case TASK_ADD:

            const { tasks } = state;
            const { title, descr } = action.payload;

            let newTaskId = !tasks.length ? 0 : tasks.length;       

            const newTasksArr = [...tasks, { id: newTaskId, title, descr }];  

            return {
                ...state,
                tasks: newTasksArr,
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