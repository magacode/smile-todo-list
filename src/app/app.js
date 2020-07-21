import React from 'react';
import { connect } from 'react-redux';

import { getIdxArray } from '../utils';
import ContainerRow from '../components/container-row';
import List from '../components/list';
import AddTask from '../components/add-task';
import TodoTask from '../components/todo-task';
import { taskDel } from '../store/actions';

import classes from './app.module.scss';

const App = ({ tasks, taskDel }) => {

    const deleteTask = (id) => {        
       
         const idx = getIdxArray(tasks, id);

         taskDel([
            ...tasks.slice(0, idx),
            ...tasks.slice(idx +1)
       ]);
    };

    return (
        <ContainerRow direction="center">
            <div className='col-12 col-sm-6'>
                <List data={tasks} component={TodoTask} taskDel={deleteTask} />
                <AddTask />
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
        taskDel: (updateTasks) => dispatch(taskDel(updateTasks)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);