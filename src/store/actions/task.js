import { TASK_ADD, TASK_DELETE } from '../constants';

const taskAdd = (newTaskObj) => {   
    return {
        type: TASK_ADD,
        payload: newTaskObj, 
    }
}

const taskDel = (id) => {    
    return {
        type: TASK_DELETE,
        payload: id,
    }
}

export {
    taskAdd,
    taskDel,
}
