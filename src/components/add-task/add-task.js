import React, { useState } from 'react';
import { connect } from 'react-redux';


import { taskAdd } from '../../store/actions';
import Modal from '../modal';

import classes from './add-task.module.scss';

const AddTask = ({ taskAdd }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');

    const createTask = (title, descr) => {  
        taskAdd({ title, descr });
        setIsOpen(false);
        setTitle('');
        setDescr('');
    }

    return (
        <div className="add-task">
            <button type="button" onClick={() => setIsOpen(true)} className="btn btn-success">Создать задачу</button>
            <Modal title="Создать задачу" isOpen={isOpen} onCancel={() => setIsOpen(false)}>     
                <div className="form-group">
                    <label htmlFor="task-title">Заголовок</label>
                    <input type="text" id="task-title" className="form-control" value={title} onChange={event => setTitle(event.target.value)} placeholder='Введите заголовок задачи' />
                </div>
                <div className="form-group">
                    <label htmlFor="task-descr">Описание</label>
                    <textarea id="task-descr" className="form-control" rows="3" value={descr} onChange={event => setDescr(event.target.value)} placeholder="Введите описание задачи"></textarea>
                </div>     
                    <div className={classes.modalFooter}>
                        <button type="button" onClick={() => setIsOpen(false)} className="btn btn-secondary">Отмена</button>                                    
                        <button type="button" onClick={() => createTask(title, descr)} className="btn btn-success">Сохранить</button>
                    </div>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        taskAdd: (newTaskObj) => dispatch(taskAdd(newTaskObj)),
    }
}

export default connect(null, mapDispatchToProps)(AddTask);