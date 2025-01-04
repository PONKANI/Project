import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { CheckSquareFill, Dot, ChevronCompactLeft, Hourglass, CupHotFill, Stripe, ChatSquareFill } from 'react-bootstrap-icons';

function Time() {
  const cellStyle = {
    padding: '10px',
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    display: 'flex', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    position: 'relative', 
  };

  const renderTimeSlot = (time, name, procedure, status, bgColor) => {
    return (
      <Col xs={2} style={{ ...cellStyle,width:"18rem", backgroundColor: bgColor }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h6>
           
            {name}
          </h6>
          <p>
            {time} <ChevronCompactLeft size={12} /> {time + 1}AM
          </p>
          <Badge bg="light" className="text-muted" style={{ padding: '10px', fontSize: '12px' }}>
            {procedure}
          </Badge>
        </div>

      
        <Badge
          bg="light"
          className="text-muted"
          
          style={{
            padding: '10px',
            height: '40px',
            position: 'absolute',
            top: '10px', 
            right: '10px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Dot
            size={20}
            style={{
              color:
                status === 'Finished'
                  ? 'green'
                  : status === 'Encounter'
                  ? 'yellow'
                  : status === 'Registered'
                  ? 'grey'
                  : 'green',
              marginRight: '5px',
            }}
          />
          {status}
        </Badge>
      </Col>
    );
  };

  return (
    <div class="col-md-9 col-sm-12 ms-sm-auto col-lg-10 px-md-4"  >
      
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottomz">
    <Container fluid className="w-100 " >
  
      <Row className="mb-3" style={{ justifyContent: 'flex-start', flexWrap: 'nowrap', gap: '15px' }}>
        <Col xs={3} className="text-center" style={cellStyle}>
          <strong>9AM</strong>
        </Col>
    
        {renderTimeSlot(9,  <><Stripe size={14} color='rgb(240, 82, 208)'/>  Raffi Jainudin</>, 'General Checkup', 'Finished', 'rgb(249, 208, 241)')}
        <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
         
               <Col xs={3} className="text-center" style={{ ...cellStyle, borderColor: '#333' }}>
                 <strong>Available Time</strong>
               </Col>
             </Row>
    
      <Row className="mb-3" style={{ justifyContent: 'flex-start', flexWrap: 'nowrap', gap: '15px' }}>
        <Col xs={3} className="text-center" style={cellStyle}>
          <strong>10AM</strong>
        </Col>
        {renderTimeSlot(10, <><CheckSquareFill size={14} color='rgb(12, 105, 16)'/>  Sekar nanditha</>, 'Scaling', 'Finished', 'rgb(213, 248, 212)')}
        <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
        <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
      </Row>

    
       <Row className="mb-3" style={{ justifyContent: 'flex-start', flexWrap: 'nowrap', gap: '15px' }}>
               <Col xs={3} className="text-center" style={cellStyle}>
                 <strong>11AM</strong>
               </Col>
               <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
         
               {renderTimeSlot(11,<><CheckSquareFill size={14} color='rgb(12, 105, 16)'/>  AngKasa Pura</>, 'Bleaching', ' Finished', 'rgb(213, 248, 212)')}
           
               <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
             </Row>

      
      <Row className="mb-3" style={{ justifyContent: 'flex-start', flexWrap: 'nowrap', gap: '15px' }}>
        <Col xs={3} className="text-center" style={cellStyle}>
          <strong>12PM</strong>
        </Col>
        {renderTimeSlot(12, <><Hourglass size={14} color='rgb(3, 179, 228)'/>  Lembayung Senja</>, 'Extraction', 'Encounter', 'rgb(196, 240, 252)')}
        <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
        <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
      </Row>

    
      <Row className="text-center mb-3">
        <Col xs={3} className='text-center' style={cellStyle}>
        <strong>1PM</strong>
          <Badge bg="secondary" className="py-3" style={{ marginLeft: '40rem' }}>
            <CupHotFill size={20} style={{ marginRight: '10px' }} />
            BREAK TIME
          </Badge>
        </Col>
      </Row>

   
      <Row className="mb-3" style={{ justifyContent: 'flex-start', flexWrap: 'nowrap', gap: '25px' }}>
        <Col xs={3} className="text-center" style={cellStyle}>
          <strong>2PM</strong>
        </Col>
        {renderTimeSlot(2,  <><Hourglass size={14} color='rgb(3, 179, 228)'/>  Daniswara Lee</>, 'Waiting List', 'Registered',   'rgb(196, 240, 252)')}
        {renderTimeSlot(2, <><Hourglass size={14} color='rgb(235, 147, 41)'/>  Waiting Verification </>, 'Waiting List', 'Registered', 'rgb(248, 249, 213)')}
        <Col xs={3} style={{ ...cellStyle, borderColor: '#333', backgroundColor: 'transparent' }}></Col>
      </Row>
    </Container>
    </div>
    </div>
  );
}

export default Time;
