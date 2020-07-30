import React, { useState } from 'react';

import ContainerRow from '../components/container-row';
import TasksList from '../components/tasks-list';
import ModalTask from '../components/modal-task';

const App = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ dataModal, setDataModal ] = useState({ mode: 'edit', id: null });

  return (
    <ContainerRow direction="center">
      <div className='col-12 col-sm-6'>
        <TasksList setIsOpen={setIsOpen} setDataModal={setDataModal} />
        <ModalTask isOpen={isOpen} onCancel={setIsOpen} dataModal={dataModal} />
        <button type="button" onClick={() => { setIsOpen(true); setDataModal({ ...dataModal, mode: 'create' }) }} className="btn btn-success">Создать задачу</button>
      </div>
    </ContainerRow>
  )
}

export default App;