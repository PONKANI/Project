import React from 'react';
import { ThreeDots } from 'react-bootstrap-icons';

function Side({ names }) {
  return (
    <div className="col-md-9 col-sm-12 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h6>GMT</h6>

       
        <div className="d-flex justify-content-around" style={{ flex: 1 }}>
       
          {names.map((name, index) => (
            <div key={index} className="d-flex align-items-center position-relative" style={{ marginLeft: '20px' }}>
              <div>
                
                <h5>{name}</h5>
                <p>Today appointment: 2 Patients</p>
              </div>
              
              <ThreeDots size={24} style={{ position: 'absolute', top: '0', right: '0', marginTop: '5px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Side;
