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
          ...state.tasks,
          byId: {
            ...state.tasks.byId,
            [idTask]: { ...state.tasks.byId[idTask], done: !state.tasks.byId[idTask].done }
          }
        },
        searchTasks: {
          ...state.searchTasks,
          byId: {
            ...state.searchTasks.byId,
            [idTask]: { ...state.searchTasks.byId[idTask], done: !state.searchTasks.byId[idTask].done }
          }
        },
        filterTasks: {
          ...state.filterTasks,
          byId: {
            ...state.filterTasks.byId,
            [idTask]: { ...state.filterTasks.byId[idTask], done: !state.filterTasks.byId[idTask].done }
          }
        }
      }



    // case TASK_DONE:
    // let newDoneFilterObj;  
    // let newDoneSearchObj;  
    // let newDoneTasksObj;  

    // const idTask = action.payload;


    // for (let prop in filterTasks) {
      // if (filterTasks.hasOwnProperty(prop)) {
        // console.log('---', filterTasks.byId[idTask], '---')
        // if (filterTasks.byId[idTask] === idTask) {
          // console.log('ID: ', idTask)
          // newDoneFilterObj = {         
          //     ...state.filterTasks.allIds,
          //     byId: { ...filterTasks.byId, [idTask]: { ...filterTasks.byId[prop], done: !filterTasks.byId[prop].done } },                                
          // }
        // }
      // }
    // }
    
    // for (let prop in searchTasks) {
    //   if (searchTasks.hasOwnProperty(prop)) {
    //     if (searchTasks.byId[prop] === idTask) {

    //       newDoneSearchObj = {

    //           ...state.searchTasks.allIds,
    //           byId: { ...searchTasks.byId, [idTask]: { ...searchTasks.byId[prop], done: !searchTasks.byId[prop].done } },                           
 
    //       }
    //     }
    //   }
    // }

    // for (let prop in tasks) {
    //   if (tasks.hasOwnProperty(prop)) {
    //     if (tasks.byId[prop] === idTask) {

    //       newDoneTasksObj = {
    //           ...state.tasks.allIds,
    //           byId: { ...tasks.byId, [idTask]: { ...tasks.byId[prop], done: !tasks.byId[prop].done } },                           
    //       }
    //     }
    //   }
    // }



    // return {
    //   ...state,
    //   tasks: { ...newDoneTasksObj },
    //   searchTasks: { ...newDoneSearchObj },
    //   filterTasks: { ...newDoneFilterObj },
    // }

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
          for (let prop in searchTasks.byId) {
            if (searchTasks.byId.hasOwnProperty(prop)) {
              if (!searchTasks.byId[prop].done) {
                newFilterObj[prop] = searchTasks.byId[prop];
                newFilterAllIds.push(prop);
              }
            }
          }

          return {
            ...state,
            filterTasks: {
              byId: newFilterObj,
              allIds: newFilterAllIds,              
            },
          }

        case 'done':
          for (let prop in searchTasks.byId) {
            if (searchTasks.byId.hasOwnProperty(prop)) {
              if (searchTasks.byId[prop].done) {
                newFilterObj[prop] = searchTasks.byId[prop];
                newFilterAllIds.push(prop);
              }
            }
          }

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