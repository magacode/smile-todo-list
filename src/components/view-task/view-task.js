import React from 'react';

import Modal from '../modal';

const ViewTask = ({ isOpen, setIsOpen, taskData: { title, descr } }) => {

    return (
        <Modal title="О задаче" isOpen={isOpen} onCancel={() => setIsOpen(false)}>
            <p className="title">{title}</p>
            <p className="descr">{descr}</p>
        </Modal>
    )
}

export default ViewTask;