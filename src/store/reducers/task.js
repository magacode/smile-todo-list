import { TASK_DEL, TASKS_UPDATE } from '../constants';
import { getIdxArray } from '../../utils';

const initialState = {
  tasks: [],
}

const taskReducer = (state = initialState, action) => {
  const { tasks } = state;

  switch(action.type) {

    case TASK_DEL:

      const idx = getIdxArray(tasks, action.payload);

      return {
        ...state,
        tasks: [
            ...tasks.slice(0, idx),
            ...tasks.slice(idx +1)
        ],
      }

    case TASKS_UPDATE:          
      const { id, title, descr } = action.payload;

      const updateIdx = getIdxArray(tasks, id); 
          
      let newTaskId;
      let updateTasks;

      if (id === undefined) {

        newTaskId = tasks.length ?  tasks[tasks.length - 1].id + 1 : 0;

        updateTasks = [
          ...tasks,
          { id: newTaskId, title, descr },
        ];
          
      } else {
        newTaskId = id;

        updateTasks = [
          ...tasks.slice(0, updateIdx),
          { ...action.payload },
          ...tasks.slice(updateIdx +1)
        ] 
      }

      return {
        ...state,
        tasks: updateTasks,
      }

    default:
        return state;

    }

}

export default taskReducer;