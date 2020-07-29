import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

import classes from './todo-task.module.scss';

const TodoTask = ({ id, title, setIsOpen, setDataModal }) => {
  return (
    <>
      <h5 className="mb-1">{title}</h5>
      <FontAwesomeIcon 
        icon={faEye} 
        onClick={() => {
          setIsOpen(true);
          setDataModal({ mode: 'view', id })
        }} 
        className={classes.icon} 
      />
      <FontAwesomeIcon 
        icon={faEdit} 
        onClick={() => {
          setIsOpen(true);
          setDataModal({ mode: 'edit', id })
        }} 
        className={classes.icon} 
      />    
      <FontAwesomeIcon 
        icon={faTrash} 
        onClick={() => {
          setIsOpen(true);
          setDataModal({ mode: 'del', id })
        }} 
        className={classes.icon} 
      />
      </>
  );
}

export default TodoTask;