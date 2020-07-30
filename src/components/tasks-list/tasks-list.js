import React from 'react';
import { connect } from 'react-redux';

import TodoTask from '../todo-task';

const TasksList = ({ tasksList, setIsOpen, setDataModal }) => {
  return (
    <ul className="list-group">
      {
        tasksList.map((item) => {
          const { id, title } = item;  
          
          return  <li 
                    key={id} 
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <TodoTask id={id} title={title} setIsOpen={setIsOpen} setDataModal={setDataModal} />
                  </li>
        })
      }
    </ul>
  ) 
}

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasksList: taskReducer.tasks,
  }
}

export default connect(mapStateToProps, null)(TasksList);