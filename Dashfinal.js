import React from 'react'
import Nav from './Nav'
import Dentists from './Dentists'
import Time from './Time'
import Sidebar from './Sidebar'
import Side from './Side'



function Dashfinal() {
  const doctorNames = ['Dr. Thomsan', 'Dr. Shalini','Dr. George'];
  return (
    <div style={{height:'100vh'}}>
    
    <div >
      <Sidebar />
    </div>

    <div  style={{position:'relative',bottom:'49rem '}}>
      <Nav />
      <Dentists />
      <Side names={doctorNames} />
      <Time />
    </div>
  </div>
  )
}

export default Dashfinal