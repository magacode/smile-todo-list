import { TASK_ADD, TASK_DEL, TASK_EDIT } from '../constants';
import { getIdxArray } from '../../utils';

const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {
    console.log(action.type)
   
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

        case TASK_EDIT:            
            const updateIdx = getIdxArray(tasks, action.payload.id);

            return {
                ...state,
                tasks: [
                    ...tasks.slice(0, updateIdx),
                    { ...action.payload },
                    ...tasks.slice(updateIdx +1)
               ]                
            }


        default:
            return state;

    }

}

export default taskReducer;