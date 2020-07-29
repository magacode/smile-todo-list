import React from 'react';
import { connect } from 'react-redux';

import { taskDel } from '../../store/actions';

import classes from './modal-confirm.module.scss';

const ModalConfirm = ({ id, onCancel, taskDel, }) => {
  return (
    <div className="confirm">
      <p className="title">Вы действительно хотите удалить задачу?</p>
      <div className={classes.buttons}>
        <button type="button" onClick={() => onCancel()} className="btn btn-secondary">Отмена</button>
        <button type="button" onClick={() => { taskDel(id); onCancel(false); }} className="btn btn-danger">Удалить</button>
      </div>
    </div>
  )
};

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasks: taskReducer.tasks,
  }
}

const mapDispatchToProps = {
  taskDel,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);