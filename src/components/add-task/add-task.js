import React, { useState } from 'react';
import { connect } from 'react-redux';

import { modalOpen, modalClose, taskAdd, taskDel } from '../../store/actions';
import Modal from '../modal';

const AddTask = ({ isOpen, tasks, modalOpen, modalClose, taskAdd }) => {
    const [title, setTitle] = useState('Введите заголовок задачи');
    const [descr, setDescr] = useState('Введите описание задачи');

    const createTask = (title, descr) => {      
        let getLastId;

        if (!tasks.length) {
            getLastId = 0;
        } else {
            getLastId = ++tasks[tasks.length - 1].id;
        }

        const newArray = [...tasks, {id: getLastId, title, descr}];         
   
        taskAdd(newArray);
       
    }

    return (
        <div className="add-task">
            <button type="button" onClick={modalOpen} className="btn btn-success">Создать задачу</button>
            <Modal
                title="Создать задачу"
                isOpen={isOpen}
                onCancel={modalClose}
                
            >

                <form>
                    <div className="form-group">
                        <label htmlFor="task-title">Заголовок</label>
                        <input type="text" className="form-control" id="task-title" value={title} onChange={event => setTitle(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="task-descr">Описание</label>
                        <textarea className="form-control" id="task-descr" rows="3" value={descr} onChange={event => setDescr(event.target.value)}></textarea>
                    </div>
                </form>
                <button onClick={() => createTask(title, descr)}>Отправить</button>
            </Modal>

        </div>
    )
}

const mapStateToProps = ({ modalReducer, taskReducer }) => {
    return {
        isOpen: modalReducer.isOpen,
        tasks: taskReducer.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalOpen: () => dispatch(modalOpen()), 
        modalClose: () => dispatch(modalClose()),
        taskAdd: (newTaskObj) => dispatch(taskAdd(newTaskObj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);