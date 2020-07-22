import { TASK_ADD, TASK_DEL } from '../constants';

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

export {
    taskAdd,
    taskDel,
}
