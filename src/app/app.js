import React from 'react';

import ContainerRow from '../components/container-row';
import List from '../components/list';
import AddTask from '../components/add-task';
import TodoTask from '../components/todo-task';

import classes from './app.module.scss';

const App = () => {
    const testData = [{id: 1, title: 'Dich'}, {id: 2, title: 'Dich'}, {id: 3, title: 'Dich'}];
    return (
        <ContainerRow direction="center">
            <div className='col-12 col-sm-6'>
                {/* <TodoSearch /> */}
                <List data={testData} component={TodoTask} />
                <AddTask />
            </div>
        </ContainerRow>
    )
}

export default App;