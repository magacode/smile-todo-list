import React from 'react';
import { connect } from 'react-redux';

import ContainerRow from '../components/container-row';
import List from '../components/list';
import AddTask from '../components/add-task';
import TodoTask from '../components/todo-task';
import { taskDel } from '../store/actions';

import classes from './app.module.scss';

const App = ({ tasks, taskDel }) => {
    return (
        <ContainerRow direction="center">
            <div className='col-12 col-sm-6'>
                <List data={tasks} component={TodoTask} taskDel={taskDel} />
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
        taskDel: (id) => dispatch(taskDel(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);