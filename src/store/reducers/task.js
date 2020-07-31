import { TASK_DEL, TASKS_UPDATE, TASKS_SEARCH } from '../constants';

const initialState = {
  tasks: {
    byId: {},
    allIds: [],
  },
  searchTasks: {
    byId: {},
    allIds: [],    
  }
}

let maxId = 0;

const taskReducer = (state = initialState, action) => {
  const { tasks, searchTasks } = state;  

  switch(action.type) {

    case TASKS_SEARCH:
      const newSearchObj = {};
      const newSearchAllIds = [];

      const term = action.payload;

      if (term.length !== 0) {
        for (let prop in tasks.byId) {
          if (tasks.byId.hasOwnProperty(prop)) {
            if (tasks.byId[prop].title.indexOf(term) > -1) {
              newSearchObj[prop] = tasks.byId[prop];
              newSearchAllIds.push(prop);
            } 
          }
        }
      } else {
          return {
          ...state,
          searchTasks: {
            byId: tasks.byId,
            allIds: tasks.allIds,
          },
        }
      }

      return {
        ...state,
        searchTasks: {
          byId: newSearchObj,
          allIds: newSearchAllIds,
        },
      }

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

        updateById = Object.assign({}, tasks.byId, {[taskId]: { id: taskId, title, descr }});
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
        allTasks[id] = { id, title, descr };
 
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