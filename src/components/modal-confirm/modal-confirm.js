import React from 'react';

import classes from './modal-confirm.module.scss';

const ModalConfirm = ({ title, onCancel, onConfirm, id }) => {
  return (
    <div className="confirm">
      <p className="title">{title}</p>
      <div className={classes.buttons}>
        <button type="button" onClick={() => onCancel()} className="btn btn-secondary">Отмена</button>
        <button type="button" onClick={() => { onConfirm(id); onCancel(false); }} className="btn btn-danger">Удалить</button>
      </div>
    </div>
  )
};

export default ModalConfirm;