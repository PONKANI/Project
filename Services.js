import React, { useState } from 'react';
import { Dropdown, DropdownButton, Card, Row, Col, Button } from 'react-bootstrap';

const servicesData = {
  'Dental Care': [
    { name: 'Teeth Cleaning', cost: '$100', dentists: 'Dr. Alice, Dr. Bob' },
    { name: 'Cavity Filling', cost: '$150', dentists: 'Dr. Bob, Dr. Charlie' }
  ],
  'Orthodontics': [
    { name: 'Braces', cost: '$2000', dentists: 'Dr. Dave, Dr. Eve' },
    { name: 'Invisalign', cost: '$2500', dentists: 'Dr. Eve, Dr. Fiona' }
  ],
  'Cosmetic Dentistry': [
    { name: 'Teeth Whitening', cost: '$300', dentists: 'Dr. Fiona, Dr. Grace' },
    { name: 'Veneers', cost: '$1200', dentists: 'Dr. Grace, Dr. Henry' }
  ]
};

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Dental Care');
  const [serviceList, setServiceList] = useState(servicesData[selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setServiceList(servicesData[category]);
  };

  return (
    <div className="container mt-5">
      <h2>Our Services</h2>
      
      
      <DropdownButton
        id="dropdown-category"
        title={`Select Category: ${selectedCategory}`}
        onSelect={handleCategorySelect}
        className="mb-4">
        {Object.keys(servicesData).map((category) => (
          <Dropdown.Item key={category} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </DropdownButton>

    
      <Row>
        {serviceList.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                  <strong>Cost:</strong> {service.cost}
                </Card.Text>
                <Card.Text>
                  <strong>Available Dentists:</strong> {service.dentists}
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;