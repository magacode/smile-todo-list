import React from 'react';

const List = ({ data, openModalDelTask, viewTask, openModalEditTask, component: ComponentItem }) => {
    return (
        <ul className="list-group">
            {
                data.map((item) => {
                    const { id } = item;  
                    return <li key={id} className="list-group-item d-flex justify-content-between align-items-center"><ComponentItem {...item} openModalDelTask={openModalDelTask} viewTask={viewTask} openModalEditTask={openModalEditTask} /></li>
                })
            }
        </ul>
    )
    

}

export default List;