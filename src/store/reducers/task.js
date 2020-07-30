import { TASK_DEL, TASKS_UPDATE } from '../constants';
import { getIdxArray } from '../../utils';

const initialState = {
  tasks: {
    byId: {},
    allIds: [],
  }
}

let maxId = 0;

const taskReducer = (state = initialState, action) => {
  const { tasks } = state;  

  switch(action.type) {

    case TASK_DEL:
      const delId = action.payload;

      const allTasks = Object.assign({}, tasks.byId);      
      delete allTasks[delId];

      const delIdx =  tasks.allIds.findIndex((el) => el === delId);
      const newAllIds = [
        ...tasks.allIds.slice(0, delIdx),
        ...tasks.allIds.slice(delIdx + 1),
      ];

      return {
        ...state,
        tasks: {
          byId: allTasks,
          allIds: newAllIds,
        },
      } 

    case TASKS_UPDATE:          
      const { id, title, descr } = action.payload;
          
      let updateById;
      let updateAllIds;

      if (id === undefined) {
        let taskId = `task${++maxId}`;

        updateById = Object.assign({}, tasks.byId, {[taskId]: { title, descr }});
        updateAllIds = [...tasks.allIds, taskId];

        return {
          ...state,
          tasks: {
            byId: updateById,
            allIds: updateAllIds,
          },
        }
          
      } else {

        const allTasks = Object.assign({}, tasks.byId);
        allTasks[id] = { title, descr };
 
        return {
          ...state,
          tasks: {
            ...tasks,
            byId: allTasks,
          },
        } 
      }

    default:
        return state;
        
    }

}

export default taskReducer;