import { TASK_ADD, TASK_DEL, TASK_EDIT } from '../constants';

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

export {
    taskAdd,
    taskDel,
    taskEdit,
}
