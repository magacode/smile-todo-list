import React from 'react';

const ContainerRow = ({ children }) => {
    return (
        <div className="container">
            <div className="row">{ children }</div>
        </div>        
    )
}

export default ContainerRow;