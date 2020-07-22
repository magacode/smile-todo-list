import { TASK_ADD, TASK_DEL } from '../constants';
import { getIdxArray } from '../../utils';

const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {
   
    const { tasks } = state;

    switch(action.type) {

        case TASK_ADD:

            const { title, descr } = action.payload;

            let newTaskId = !tasks.length ? 0 : tasks.length;       

            const newTasksArr = [...tasks, { id: newTaskId, title, descr }];  

            return {
                ...state,
                tasks: newTasksArr,
            }

        case TASK_DEL:

            const idx = getIdxArray(tasks, action.payload);

            return {
                ...state,
                tasks: [
                    ...tasks.slice(0, idx),
                    ...tasks.slice(idx +1)
               ],
            }

        default:
            return state;

    }

}

export default taskReducer;