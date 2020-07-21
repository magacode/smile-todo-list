import React from 'react';

import Portal from '../portal';

// import classes from './modal.module.scss';
import './modal.scss';

const Modal = ({ title, isOpen, onCancel, children }) => {

    return (
        <>
            {
                isOpen && 
                <Portal>
                    <div className="modalOverlay">
                        <div className="modalWindow">
                            <div className="modalHeader">
                                <div className="modalTitle">{title}</div>
                                <div className="times" onClick={onCancel}></div>
                            </div>
                            <div className="modalBody">
                                {children}
                            </div>
                            <div className="modalFooter">
                                <button type="button" onClick={onCancel} className="btn btn-secondary">Отмена</button>
                                {/* <button type="button" onClick={onSubmit} className="btn btn-success">Success</button> */}
                                
                            </div>
                        </div>
                    </div>
                </Portal> 
            }  
        </>
    )
}

export default Modal;