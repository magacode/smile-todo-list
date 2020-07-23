import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

import classes from './todo-task.module.scss';

const TodoTask = ({ id, title, openModalDelTask, viewTask, openModalEditTask }) => {
    return (
        <>
            <h5 className="mb-1">{title}</h5>
            <FontAwesomeIcon icon={faTrash} onClick={() => openModalDelTask(id)} className={classes.icon} />
            <FontAwesomeIcon icon={faEye} onClick={() => viewTask(id)} className={classes.icon} />
            <FontAwesomeIcon icon={faEdit} onClick={() => openModalEditTask(id)} className={classes.icon} />
        </>
    );
}

export default TodoTask;