import { TASK_ADD, TASK_DEL, TASK_EDIT, TASKS_UPDATE } from '../constants';
import { getIdxArray } from '../../utils';

const initialState = {
    tasks: [
        // { id: 0, title: 'Hello', descr: 'Descr' }
    ],
}

const taskReducer = (state = initialState, action) => {
    const { tasks } = state;

    switch(action.type) {

        // case TASK_ADD:

        //     const { title, descr } = action.payload;

        //     let newTaskId = !tasks.length ? 0 : tasks.length;       

        //     const newTasksArr = [...tasks, { id: newTaskId, title, descr }];  

        //     return {
        //         ...state,
        //         tasks: newTasksArr,
        //     }

        case TASK_DEL:

            const idx = getIdxArray(tasks, action.payload);

            return {
                ...state,
                tasks: [
                    ...tasks.slice(0, idx),
                    ...tasks.slice(idx +1)
               ],
            }

        // case TASK_EDIT:            
        //     const updateIdx = getIdxArray(tasks, action.payload.id);

        //     return {
        //         ...state,
        //         tasks: [
        //             ...tasks.slice(0, updateIdx),
        //             { ...action.payload },
        //             ...tasks.slice(updateIdx +1)
        //        ]                
        //     }

        case TASKS_UPDATE:          
          const { id, title, descr } = action.payload;

          const updateIdx = getIdxArray(tasks, id);

          console.log(id, updateIdx, 'actionID')
          
          let newTaskId;

          if (id === undefined) {
            newTaskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
            // newTaskId = !tasks.length ? 0 : tasks.length;
            // newTaskId = !tasks.length ? 0 : tasks[tasks.length - 1].id;
            // newTaskId = !tasks.length ? 0 : tasks[tasks.length - 1].id + 1;
            // newTaskId = tasks[tasks.length - 1].id ;
          } else {
            newTaskId = id;
          }

          console.log(newTaskId, 'newTaskId')

          return {
            ...state,
            tasks: [
              ...tasks.slice(0, updateIdx),
              { id: newTaskId, title, descr },
              ...tasks.slice(updateIdx + 1)
            ]
          }

        default:
            return state;

    }

}

export default taskReducer;