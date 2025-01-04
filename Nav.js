import React from 'react'
import {Activity, PlusCircleFill,QuestionCircle,Gear,FlagFill} from 'react-bootstrap-icons'


function Nav() {
  return (

    <div class="col-md-9 col-sm-12 ms-sm-auto col-lg-10 px-md-4"  >
      
    <div class="d-flex justify-content-between  flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
      <h1 class="h2">Reservations</h1>
      <div className='d-flex  align-items-center gap-5'>
        <input
          type='search'
          className='form-control'
          placeholder='Search for anything here...'
          style={{ width: '15rem' }}
        />



        <PlusCircleFill size={30} style={{ color: 'blue' }} />

        <QuestionCircle size={24} />
        <Activity size={24} />
        <Gear size={24} />
        <FlagFill size={24} style={{ color: 'green' }} />
      </div>
    </div>

    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <div className='d-flex justify-content-around ms-1'>
        <h3 className="text-primary hover-text-danger" style={{ cursor: 'pointer' }} >Calendar</h3>
        <h3 className='ms-5' style={{ cursor: 'pointer' }}>Log History</h3>
      </div>
    </div>
    </div>
  
    )
}

export default Nav