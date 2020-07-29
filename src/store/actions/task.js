import { TASK_ADD, TASK_DEL, TASK_EDIT, TASKS_UPDATE } from '../constants';

const taskAdd = (newTaskObj) => {   
    return {
        type: TASK_ADD,
        payload: newTaskObj, 
    }
}

const taskDel = (id) => {    
    return {
        type: TASK_DEL,
        payload: id,
    }
}

const taskEdit = (updateTaskObj) => {
    return {
        type: TASK_EDIT,
        payload: updateTaskObj,
    }
}

const tasksUpdate = (updateTaskObj) => {
    return {
        type: TASKS_UPDATE,
        payload: updateTaskObj,
    }
}

export {
    taskAdd,
    taskDel,
    taskEdit,
    tasksUpdate,
}
