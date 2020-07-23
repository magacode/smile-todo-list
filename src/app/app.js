import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getIdxArray } from '../utils';
import ContainerRow from '../components/container-row';
import List from '../components/list';
import AddTask from '../components/add-task';
import TodoTask from '../components/todo-task';
import { taskDel, taskAdd, taskEdit } from '../store/actions';
import ViewTask from '../components/view-task/view-task';
import ModalTask from '../components/modal-task/modal-task';

import classes from './app.module.scss';

const App = ({ tasks, taskDel, taskAdd, taskEdit }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ view, setView ] = useState(false);
    const [ taskData, setTaskData ] = useState({ id: null, title: '', descr: '' });
    const [ modalType, setModalType ] = useState('create');

    const openModalViewTask = () => {
        setView(true);
        setIsOpen(true);
    }

    const openModalCreateTask = () => {
        setView(false);
        setIsOpen(true);
        setModalType('create');
    }

    const openModalEditTask = (idTask) => {
        const taskIdent = getIdxArray(tasks, idTask);

        const { id, title, descr } = tasks[taskIdent];        
        setTaskData({ id, title, descr });
        setView(false);
        setIsOpen(true);
        setModalType('edit');
    }

    const openModalDelTask = (id) => {
        const taskIdent = getIdxArray(tasks, id);

        setTaskData({  ...tasks[taskIdent] });
        setView(true);
        setIsOpen(true);
        setModalType('del');        
    }

    const closeModal = () => {
        setView(false);
        setIsOpen(false);    
        setTaskData({ title: '', descr: '' });    
    }

    const closeModalDel = (id) => {
        setView(false);
        setIsOpen(false);    
        setTaskData({ id: null, title: '', descr: '' }); 
        taskDel(id);   
    }

    const createTask = (title, descr) => {
        taskAdd(taskData);
        setIsOpen(false);
        setTaskData({ title: '', descr: '' });
    }

    const viewTask = (id) => {
        const taskId = getIdxArray(tasks, id);

        const { title, descr } = tasks[taskId];
        setTaskData({ title, descr });
        openModalViewTask();
    }

    const editTask = () => {      
        const { id, title, descr } = taskData;
        taskEdit({ id, title, descr });
        setIsOpen(false);
        setTaskData({ title: '', descr: '' });
    }

    return (
        <ContainerRow direction="center">
            <div className='col-12 col-sm-6'>
                <List data={tasks} component={TodoTask} openModalDelTask={openModalDelTask} viewTask={viewTask} openModalEditTask={openModalEditTask} />
                <button type="button" onClick={() => openModalCreateTask()} className="btn btn-success">Создать задачу</button>
                <ModalTask modalType={modalType} isOpen={isOpen} setIsOpen={closeModal} view={view} taskData={taskData} createTask={createTask} setTaskData={setTaskData} editTask={editTask} closeModalDel={closeModalDel} />
            </div>
        </ContainerRow>
    )    
}

const mapStateToProps = ({ taskReducer }) => {
    return {
        tasks: taskReducer.tasks,
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        taskDel: (id) => dispatch(taskDel(id)),
        taskAdd: (newTaskObj) => dispatch(taskAdd(newTaskObj)),
        taskEdit: (updateTaskObj) => dispatch(taskEdit(updateTaskObj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);