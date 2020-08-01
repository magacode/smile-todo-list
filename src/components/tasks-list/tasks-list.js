import React from 'react';
import { connect } from 'react-redux';

import TodoTask from '../todo-task';

const TasksList = ({ tasksList, setIsOpen, setDataModal }) => {
  return (
    <ul className="list-group pt-2">
      {
        Object.keys(tasksList).map((taskId) => {          
          const { title } = tasksList[taskId];  

          return  <li 
                    key={taskId} 
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <TodoTask id={taskId} title={title} setIsOpen={setIsOpen} setDataModal={setDataModal} />
                  </li>
        })
      }
    </ul>
  ) 
}

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasksList: taskReducer.filterTasks.byId,
  }
}

export default connect(mapStateToProps, null)(TasksList);