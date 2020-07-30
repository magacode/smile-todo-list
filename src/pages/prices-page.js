import React from 'react';
import { Link } from 'react-router-dom';

import ContainerRow from '../components/container-row';

const PricesPage = () => {
  return (
    <ContainerRow>
      <div className="col">
        <h2 className="pt-3">Цены</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Start</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" className="btn btn-primary">Buy</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expert</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" className="btn btn-primary">Buy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerRow>
  )    
}

export default PricesPage;