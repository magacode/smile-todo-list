import React, { useState } from 'react';

import ContainerRow from '../components/container-row';
import TasksList from '../components/tasks-list';
import ModalTask from '../components/modal-task';
import SearchPanel from '../components/search-panel';

const App = ({ tasksList }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ dataModal, setDataModal ] = useState({ mode: 'edit', id: null });
 
  return (
    <ContainerRow direction="center">
      <div className='col-12 pt-3'>
        <button type="button" onClick={() => { setIsOpen(true); setDataModal({ ...dataModal, mode: 'create' }) }} className="btn btn-success mb-2">Создать задачу</button>
        <SearchPanel />
        <TasksList setIsOpen={setIsOpen} setDataModal={setDataModal} />
        <ModalTask isOpen={isOpen} onCancel={setIsOpen} dataModal={dataModal} />
      </div>
    </ContainerRow>
  )
}

export default App;