import { TASK_DEL, TASKS_UPDATE } from '../constants';

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

export {
    taskDel,
    tasksUpdate,
}
