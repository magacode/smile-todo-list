import { TASK_ADD, TASK_DELETE } from '../constants';

const taskAdd = (newArray) => {  

  

    return {
        type: TASK_ADD,
        payload: newArray, 
    }
}

const taskDel = (updateTasks) => {    
    return {
        type: TASK_DELETE,
        payload: updateTasks,
    }
}

export {
    taskAdd,
    taskDel,
}
