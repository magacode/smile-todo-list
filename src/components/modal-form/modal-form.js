import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getIdxArray } from '../../utils';
import { tasksUpdate } from '../../store/actions';

const ModalForm = ({ mode, id, tasks, taskEdit, taskAdd, tasksUpdate, onCancel }) => {
  let task = id === null ? {} : tasks[id];

  const [ taskData, setTaskData ] = useState({ ...task });
  
  const { title, descr } = taskData;
  
  const view = mode === 'view' ? true : false;

  const actionButton = () => {

    switch(mode) {
      case 'edit':
        tasksUpdate({ id, title, descr });
        break;

      case 'create':
        tasksUpdate({ title, descr });
        break;

    }

    onCancel(false);
    setTaskData({});
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="task-title">Заголовок</label>
        <input 
          type="text" 
          name="title" 
          value={title || ''} 
          onChange={e => setTaskData({...taskData, [e.target.name]: e.target.value})}
          disabled={view} 
          placeholder='Введите заголовок задачи' 
          id="task-title" 
          className="form-control" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-descr">Описание</label>
        <textarea 
          name="descr" 
          value={descr || ''}
          onChange={e => setTaskData({...taskData, [e.target.name]: e.target.value})} 
          disabled={view} 
          placeholder="Введите описание задачи"
          rows="3" 
          id="task-descr" 
          className="form-control"
          >
          </textarea>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => onCancel()} className="btn btn-secondary">Закрыть</button>
        { mode !== 'view' && <button type="button" onClick={actionButton} className="btn btn-success">Success</button> }
      </div>     
    </>
  )
};

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasks: taskReducer.tasks.byId,
  }
}

const mapDispatchToProps = {
  tasksUpdate,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);