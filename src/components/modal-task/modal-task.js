import React from 'react';

import Modal from '../modal';

import classes from './modal-task.module.scss';

const ModalTask = ({ modalType, isOpen, setIsOpen, view, taskData, createTask, setTaskData, editTask, closeModalDel }) => {
    const { id, title, descr } = taskData;

    return (
        <div className="add-task">
            <Modal title="Задачу" isOpen={isOpen} onCancel={() => setIsOpen(false)}>     
                <div className="form-group">
                    <label htmlFor="task-title">Заголовок</label>
                    <input type="text" id="task-title" className="form-control" disabled={view} value={title} name="title" onChange={event => setTaskData({...taskData, [event.target.name]: event.target.value})} placeholder='Введите заголовок задачи' />
                </div>
                <div className="form-group">
                    <label htmlFor="task-descr">Описание</label>
                    <textarea id="task-descr" className="form-control" rows="3" disabled={view} value={descr} name="descr" onChange={event => setTaskData({...taskData, [event.target.name]: event.target.value})} placeholder="Введите описание задачи"></textarea>
                </div>     
                    <div className={classes.modalFooter}>
                        {
                            !view 
                                ? 
                                    (<>
                                    { modalType === 'create' ? <button type="button" onClick={() => createTask(title, descr)} className="btn btn-success">Сохранить</button> : null}
                                    { modalType === 'edit' ? <button type="button" onClick={() => editTask()} className="btn btn-success">Обновить</button> : null }   
                                    </> ) 
                                : 
                                (<>{ modalType === 'del' ? <button type="button" onClick={() => closeModalDel(id)} className="btn btn-success">Удалить</button> : null }</>)
                        }                                    
                        <button type="button" onClick={() => setIsOpen(false)} className="btn btn-secondary">Отмена</button>
                    </div>
            </Modal>
        </div>
    )
}

export default ModalTask;