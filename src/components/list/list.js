import React from 'react';

const List = ({ data, taskDel, component: ComponentItem }) => {
    return (
        <ul className="list-group">
            {
                data.map((item) => {
                    const { id, ...itemProps } = item;  
                    return <li key={id} onClick={() => taskDel(id)} className="list-group-item"><ComponentItem {...itemProps} /></li>
                })
            }
        </ul>
    )
    

}

export default List;