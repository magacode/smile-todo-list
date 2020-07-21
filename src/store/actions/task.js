import { TASK_ADD, TASK_DELETE } from '../constants';

const taskAdd = ({ id, title, descr }) => {  

    const newTask = {
        id,
        title,
        descr,
    }

    return {
        type: TASK_ADD,
        payload: newTask, 
    }
}

export {
    taskAdd,
}
