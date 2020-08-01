import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { tasksFilter, tasksSearch } from '../../store/actions';

const SearchPanel = ({ tasksFilter, tasksSearch, tasks, filterStatus }) => {
  const [ term, setTerm ] = useState('');

  useEffect(() => {
    tasksSearch(term);
    tasksFilter(filterStatus);
  }, [term, tasks, filterStatus]);

  return (
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} className="form-control" placeholder="Поиск задачи" />
  )    
}

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasks: taskReducer.tasks.byId,
    filterStatus: taskReducer.filterStatus,
  }
}

const mapDispatchToProps = {
  tasksFilter,
  tasksSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);