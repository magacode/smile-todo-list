import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import Portal from '../portal';

import classes from './modal.module.scss';

const Modal = ({ title, isOpen, onCancel, children }) => {

    return (
        <>
            {
                isOpen && 
                    <Portal>
                        <div className={classes.modalOverlay}>
                            <div className={classes.modalWindow}>
                                <div className={classes.modalHeader}>
                                    <div className={classes.modalTitle}>{title}</div>
                                    <div className={classes.times} onClick={onCancel}>
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </div>
                                </div>
                                <div className={classes.modalBody}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </Portal> 
            }  
        </>
    )
}

export default Modal;