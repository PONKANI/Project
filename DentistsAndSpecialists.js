import React, { useState } from 'react';
import { Button, Form, Table, Modal, InputGroup, FormControl, Pagination } from 'react-bootstrap';

function DentistsAndSpecialists() {

  const [professionals, setProfessionals] = useState([
    { id: 1, name: "Dr. John Doe", specialty: "Orthodontist", location: "New York", contact: "123-456-7890", rating: 4.5, available: true },
    { id: 2, name: "Dr. Jane Smith", specialty: "Pediatric Dentist", location: "Los Angeles", contact: "987-654-3210", rating: 4.7, available: false },
    { id: 3, name: "Dr. Samuel Lee", specialty: "Oral Surgeon", location: "Chicago", contact: "555-555-5555", rating: 4.9, available: true },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProfessionals = professionals.filter(professional =>
    professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    professional.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    professional.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowProfile = (professional) => {
    setSelectedProfessional(professional);
    setShowProfileModal(true);
  };

  const handleCloseProfile = () => {
    setShowProfileModal(false);
    setSelectedProfessional(null);
  };

  return (
    <div className="dentists-specialists">
      <h2>View Dentists and Specialists</h2>

    
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name, specialty, or location"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button variant="outline-secondary">Search</Button>
      </InputGroup>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProfessionals.map(professional => (
            <tr key={professional.id}>
              <td>{professional.name}</td>
              <td>{professional.specialty}</td>
              <td>{professional.location}</td>
              <td>{professional.rating}</td>
              <td>{professional.available ? "Available" : "Not Available"}</td>
              <td>
                <Button variant="info" onClick={() => handleShowProfile(professional)}>View Profile</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

     
      <Modal show={showProfileModal} onHide={handleCloseProfile}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProfessional ? selectedProfessional.name : ''} Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProfessional && (
            <>
              <h5>Specialty: {selectedProfessional.specialty}</h5>
              <p><strong>Location:</strong> {selectedProfessional.location}</p>
              <p><strong>Contact:</strong> {selectedProfessional.contact}</p>
              <p><strong>Rating:</strong> {selectedProfessional.rating} / 5</p>
              <p><strong>Availability:</strong> {selectedProfessional.available ? "Available" : "Not Available"}</p>
              <Button variant="primary">Schedule Appointment</Button>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfile}>Close</Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  );
}

export default DentistsAndSpecialists;
