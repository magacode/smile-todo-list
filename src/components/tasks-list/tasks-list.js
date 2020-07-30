import React from 'react';
import { connect } from 'react-redux';

import TodoTask from '../todo-task';

const TasksList = ({ tasksList, setIsOpen, setDataModal }) => {
  
  return (
    <ul className="list-group">
      {
        Object.keys(tasksList).map((item) => {          
          const { title } = tasksList[item];  

          return  <li 
                    key={item} 
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <TodoTask id={item} title={title} setIsOpen={setIsOpen} setDataModal={setDataModal} />
                  </li>
        })
      }
    </ul>
  ) 
}

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasksList: taskReducer.tasks.byId,
  }
}

export default connect(mapStateToProps, null)(TasksList);