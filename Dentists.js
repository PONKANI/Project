import React from 'react'
import { Button } from 'react-bootstrap'
import { Calendar2CheckFill, ChevronCompactLeft, ChevronCompactRight, TextRight } from 'react-bootstrap-icons'

function Dentists() {
  return (
    <div class="col-md-9 col-sm-12 ms-sm-auto col-lg-10 px-md-4"  >
      
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
<div className="d-flex align-items-center mb-4">
  <Calendar2CheckFill size={24} />
  <p className='ms-2 mb-0'>total appointments</p>  
</div>


<div className='d-flex justify-content-center align-items-center flex-grow-1 mb-4'>
  <Button style={{ background: 'transparent', color: 'black' }}>Today</Button>
  <ChevronCompactLeft size={20} />
  <ChevronCompactRight size={20} />
  <h4 className='mx-2 mb-0'>Fri, 16 May 2022</h4> 
  <Button style={{ background: 'transparent', color: 'black', border: '1px solid grey' }}>day</Button>
  <Button style={{ background: 'transparent', color: 'grey', border: 'none' }}>week</Button>
</div>


<div className='d-flex justify-content-end align-items-center mb-4'>
  <select className="me-3">
    <option>All dentist</option>
  </select>

  <div className='input-container' style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
    <input
      type='text'
      placeholder='Filters'
      style={{ paddingRight: '30px' }}  
    />
    <TextRight className='input-icon-right' size={24} style={{ position: 'absolute', right: '10px' }} />
  </div>
</div>


  </div>
    </div>
  )
}

export default Dentists