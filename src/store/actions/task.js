import { TASK_DEL, TASKS_UPDATE, TASKS_SEARCH, TASKS_FILTER, TASK_DONE, TASK_STATUS } from '../constants';

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

const tasksFilter = (filter) => {
  return {
    type: TASKS_FILTER,
    payload: filter,
  }
}

const taskDone = (id) => {
  return {
    type: TASK_DONE,
    payload: id,
  }
}

const taskFilterStatus = (status) => {
  return {
    type: TASK_STATUS,
    payload: status,
  }
}

export {
  taskDel,
  tasksUpdate,
  tasksSearch,
  tasksFilter,
  taskDone,
  taskFilterStatus,
}
