import { TASK_DEL, TASKS_UPDATE, TASKS_SEARCH } from '../constants';

const taskDel = (id) => {  
    return {
        type: TASK_DEL,
        payload: id,
    }
}

const tasksUpdate = (updateTaskObj) => {
    return {
        type: TASKS_UPDATE,
        payload: updateTaskObj,
    }
}

const tasksSearch = (term) => {
  return {
    type: TASKS_SEARCH,
    payload: term,
  }
}

export {
  taskDel,
  tasksUpdate,
  tasksSearch,
}
