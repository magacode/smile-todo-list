import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { tasksSearch } from '../../store/actions';

const SearchPanel = ({ tasksSearch, tasks }) => {
  const [ term, setTerm ] = useState('');

  useEffect(() => {
    tasksSearch(term);
  }, [term, tasks]);

  return (
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} className="form-control" placeholder="Поиск задачи" />
  )    
}

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasks: taskReducer.tasks.byId,
  }
}

const mapDispatchToProps = {
  tasksSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);