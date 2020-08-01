import React from 'react';
import { connect } from 'react-redux';

import { taskFilterStatus } from '../../store/actions';

const FilterStatus = ({ filterStatus, taskFilterStatus }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  return (
    <div className="btn-group">
      {
        buttons.map(({ name, label }) => {
          const active = filterStatus === name ? 'btn-info' : 'btn-outline-secondary';

          return <button type="button" key={name} onClick={() => taskFilterStatus(name)} className={`btn ${active}`}>{label}</button>          
        })
      }
    </div>
  );
}

const mapStateToProps = ({ taskReducer }) => {
  return {
    filterStatus: taskReducer.filterStatus,
  }
}

const mapDispatchToProps = {
  taskFilterStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterStatus);