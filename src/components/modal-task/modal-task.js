import React, { useState } from 'react';

import Modal from '../modal';

import classes from './modal-task.module.scss';

const ModalTask = ({ isOpen, onCancel, dataModal }) => {

  // По умолчанию осущесвляется создание задачи
  // Если есть режим редактирования и идентификатор, то редактирование
  // Если режим просмотр и идентификатор, то открыть задачу.
  // Если режим удаления, то удалить задачу по идентификатору.  
  
  const modalBody = () => {

    const { mode, id } = dataModal;

    switch(mode) {
      case 'view':
      case 'edit':
      case 'create':
        return <ModalForm mode={mode} id={id} />

      default:
        return <ModalConfirm />
    }
    
  }


  return (
    <div className="add-task">
      <Modal title="...задачу" isOpen={isOpen} onCancel={() => onCancel(false)}>
        { modalBody() }         
      </Modal>
    </div>
  )
}

export default ModalTask;

const ModalForm = ({ mode, id }) => {
  const [ taskData, setTaskData ] = useState({ title: '', descr: '' });

  const { title, descr } = taskData;

  const view = mode === 'view' ? true : false;

  return (
    <>
      <div className="form-group">
        <label htmlFor="task-title">Заголовок</label>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={e => setTaskData({...taskData, [e.target.name]: e.target.value})}
          disabled={view} 
          placeholder='Введите заголовок задачи' 
          id="task-title" 
          className="form-control" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-descr">Описание</label>
        <textarea 
          name="descr" 
          value={descr}
          onChange={e => setTaskData({...taskData, [e.target.name]: e.target.value})} 
          disabled={view} 
          placeholder="Введите описание задачи"
          rows="3" 
          id="task-descr" 
          className="form-control"
          >
          </textarea>
      </div>     
    </>
  )
};
const ModalConfirm = () => {
  return <p>ModalConfirm</p>
};













// import React from 'react';

// import Modal from '../modal';

// import classes from './modal-task.module.scss';

// const ModalTask = ({ modalType, isOpen, setIsOpen, view, taskData, createTask, setTaskData, editTask, closeModalDel }) => {
//     const { id, title, descr } = taskData;

//     return (
//         <div className="add-task">
//             <Modal title="Задачу" isOpen={isOpen} onCancel={() => setIsOpen(false)}>     
//                 <div className="form-group">
//                     <label htmlFor="task-title">Заголовок</label>
//                     <input type="text" id="task-title" className="form-control" disabled={view} value={title} name="title" onChange={event => setTaskData({...taskData, [event.target.name]: event.target.value})} placeholder='Введите заголовок задачи' />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="task-descr">Описание</label>
//                     <textarea id="task-descr" className="form-control" rows="3" disabled={view} value={descr} name="descr" onChange={event => setTaskData({...taskData, [event.target.name]: event.target.value})} placeholder="Введите описание задачи"></textarea>
//                 </div>     
//                     <div className={classes.modalFooter}>
//                         {
//                             !view 
//                                 ? 
//                                     (<>
//                                     { modalType === 'create' ? <button type="button" onClick={() => createTask(title, descr)} className="btn btn-success">Сохранить</button> : null}
//                                     { modalType === 'edit' ? <button type="button" onClick={() => editTask()} className="btn btn-success">Обновить</button> : null }   
//                                     </> ) 
//                                 : 
//                                 (<>{ modalType === 'del' ? <button type="button" onClick={() => closeModalDel(id)} className="btn btn-success">Удалить</button> : null }</>)
//                         }                                    
//                         <button type="button" onClick={() => setIsOpen(false)} className="btn btn-secondary">Отмена</button>
//                     </div>
//             </Modal>
//         </div>
//     )
// }

// export default ModalTask;