import React, { useState } from 'react';
import { connect } from 'react-redux';

import { modalOpen, modalClose, taskAdd } from '../../store/actions';
import Modal from '../modal';

const AddTask = ({ isOpen, modalOpen, modalClose, taskAdd }) => {
    const [title, setTitle] = useState('Введите заголовок задачи');
    const [descr, setDescr] = useState('Введите описание задачи');

    let countId = 0;

    const submit = (title, descr) => {     
        taskAdd({id: countId++, title, descr})
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
                <button onClick={submit}>Отправить</button>
            </Modal>

        </div>
    )
}

const mapStateToProps = ({ modalReducer }) => {
    return {
        isOpen: modalReducer.isOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalOpen: () => dispatch(modalOpen()), 
        modalClose: () => dispatch(modalClose()),
        taskAdd: obj => dispatch(taskAdd(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);