import React from 'react';

const List = ({ data, component: ComponentItem }) => {
    return (
        <ul className="list-group">
            {
                data.map((item) => {
                    const { id, ...itemProps } = item;
                    return <li key={id} className="list-group-item"><ComponentItem {...itemProps} /></li>
                })
            }
        </ul>
    )
    

}

export default List;