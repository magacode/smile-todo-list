import React from 'react';
import PropTypes from 'prop-types';

const ContainerRow = ({ direction = 'start',  children }) => {

    return (
        <div className="container">
            <div className={`row justify-content-${direction}`}>
                { children }
            </div>
        </div>        
    )
}

ContainerRow.propTypes = {
    direction: PropTypes.oneOf([ 'start', 'end', 'center', 'between', 'around' ]),
}

export default ContainerRow;