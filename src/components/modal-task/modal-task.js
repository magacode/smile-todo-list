import React from 'react';
import { connect } from 'react-redux';

import { taskDel } from '../../store/actions';

import Modal from '../modal';
import ModalForm from '../modal-form';
import ModalConfirm from '../modal-confirm';

const ModalTask = ({ isOpen, onCancel, dataModal, taskDel }) => {

  const titleModal = () => {
    const { mode } = dataModal;

    switch(mode) {
      case 'view':
        return 'Просмотр задачи';

      case 'edit':
        return 'Редактировать задачу';

      case 'create':
        return 'Создать задачу';

      case 'del':
        return 'Удалить задачу';

    }
  }
  
  const modalBody = () => {
    const { mode, id } = dataModal;

    switch(mode) {
      case 'view':
      case 'edit':
      case 'create':
        return  <ModalForm mode={mode} id={id} onCancel={onCancel} />

      case 'del': 
        return  <ModalConfirm 
                  title="Вы действительно хотите удалить задачу?" 
                  onCancel={onCancel} 
                  onConfirm={taskDel} 
                  id={id}  
                />      
    }    
  }

  return (
    <div className="add-task">
      <Modal title={titleModal()} isOpen={isOpen} onCancel={() => onCancel(false)}>
        { modalBody() }         
      </Modal>
    </div>
  )
}

const mapDispatchToProps = {
  taskDel,
}

export default connect(null, mapDispatchToProps)(ModalTask);