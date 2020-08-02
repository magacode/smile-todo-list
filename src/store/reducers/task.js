import { TASK_DEL, TASKS_UPDATE, TASKS_SEARCH, TASKS_FILTER, TASK_DONE, TASK_STATUS } from '../constants';

const initialState = {
  tasks: {
    byId: {},
    allIds: [],
  },
  searchTasks: {
    byId: {},
    allIds: [],    
  },
  filterTasks: {
    byId: {},
    allIds: [],
  },
  filterStatus: 'active',
}

let maxId = 0;

const taskReducer = (state = initialState, action) => {
  const { tasks, searchTasks, filterTasks } = state;  

  switch(action.type) {

    case TASK_STATUS:
      return {
        ...state,
        filterStatus: action.payload,
      }

    case TASK_DONE:
      const idTask = action.payload;
    
      return {
        ...state,
        tasks: {
          ...tasks,
          byId: {
            ...tasks.byId,
            [idTask]: { ...tasks.byId[idTask], done: !tasks.byId[idTask].done }
          }
        },
        searchTasks: {
          ...searchTasks,
          byId: {
            ...searchTasks.byId,
            [idTask]: { ...searchTasks.byId[idTask], done: !searchTasks.byId[idTask].done }
          }
        },
        filterTasks: {
          ...filterTasks,
          byId: {
            ...filterTasks.byId,
            [idTask]: { ...filterTasks.byId[idTask], done: !filterTasks.byId[idTask].done }
          }
        }
      }

    case TASKS_FILTER: 
      const newFilterObj = {};
      const newFilterAllIds = [];

      const filter = action.payload;

      switch(filter) {
        case 'all':
          return {
            ...state,
            filterTasks: {
              byId: searchTasks.byId,
              allIds: searchTasks.allIds,              
            },
          }

        case 'active':
          Object.values(searchTasks.byId).forEach(item => {
            const { id, done } = item;

            if (!done) {
              newFilterObj[id] = item;
              newFilterAllIds.push(id);
            }            
          });

          return {
            ...state,
            filterTasks: {
              byId: newFilterObj,
              allIds: newFilterAllIds,              
            },
          }

        case 'done':
          Object.values(searchTasks.byId).forEach(item => {
            const { id, done } = item;
            
            if (done) {
              newFilterObj[id] = item;
              newFilterAllIds.push(id);              
            }
          });


          return {
            ...state,
            filterTasks: {
              byId: newFilterObj,
              allIds: newFilterAllIds,              
            },
          }            

      }

    case TASKS_SEARCH:
      const newSearchObj = {};
      const newSearchAllIds = [];

      const term = action.payload;

      if (term.length !== 0) {

        Object.values(tasks.byId).forEach(item => {
          if (item.title.indexOf(term) > -1) {
            newSearchObj[item.id] = item;
            newSearchAllIds.push(item.id)
          }
        });

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

      const delTask = (obj, id) => {
        return Object.values(obj).filter(item => item.id !== delId);
      }

      return {
        ...state,
        tasks: {
          byId: delTask(tasks.byId, delId),
          allIds: delTask(tasks.allIds, delId),
        },
      } 

    case TASKS_UPDATE:          
      const { id, title, descr, done } = action.payload;
          
      let updateById;
      let updateAllIds;

      if (id === undefined) {
        let taskId = `task${++maxId}`;

        updateById = Object.assign({}, tasks.byId, {[taskId]: { id: taskId, title, descr, done: false, }});
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
        allTasks[id] = { id, title, descr, done, };
 
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