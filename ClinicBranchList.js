import React, { useState } from 'react';
import { Button, Form, Table, Modal, InputGroup, FormControl } from 'react-bootstrap';

function ClinicBranchList() {

  const [clinics, setClinics] = useState([
    { id: 1, name: "Zendenta Clinic", branches: [{ id: 1, name: "Branch 1", location: "New York", contact: "123-456-7890" }] },
    { id: 2, name: "Avicena Clinic", branches: [{ id: 2, name: "Branch A", location: "Los Angeles", contact: "987-654-3210" }] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newClinic, setNewClinic] = useState({ name: '', branchName: '', branchLocation: '', branchContact: '' });

  const handleAddClinic = () => {
    setClinics(prevClinics => [
      ...prevClinics,
      {
        id: prevClinics.length + 1,
        name: newClinic.name,
        branches: [
          { id: prevClinics.length + 1, name: newClinic.branchName, location: newClinic.branchLocation, contact: newClinic.branchContact },
        ],
      }
    ]);
    setShowModal(false);
  };

  const handleDeleteClinic = (clinicId) => {
    setClinics(prevClinics => prevClinics.filter(clinic => clinic.id !== clinicId));
  };

  return (
    <div className="clinic-branch-list">
      <h2>Clinics and Branches</h2>
      <Button variant="primary" onClick={() => setShowModal(true)}>Add Clinic</Button>
      
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Clinic Name</th>
            <th>Branch Name</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clinics.map(clinic => (
            clinic.branches.map(branch => (
              <tr key={branch.id}>
                <td>{clinic.name}</td>
                <td>{branch.name}</td>
                <td>{branch.location}</td>
                <td>{branch.contact}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteClinic(clinic.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>

      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Clinic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="clinicName">
              <Form.Label>Clinic Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter clinic name"
                value={newClinic.name}
                onChange={e => setNewClinic({ ...newClinic, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="branchName" className="mt-3">
              <Form.Label>Branch Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter branch name"
                value={newClinic.branchName}
                onChange={e => setNewClinic({ ...newClinic, branchName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="branchLocation" className="mt-3">
              <Form.Label>Branch Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter branch location"
                value={newClinic.branchLocation}
                onChange={e => setNewClinic({ ...newClinic, branchLocation: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="branchContact" className="mt-3">
              <Form.Label>Branch Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter branch contact"
                value={newClinic.branchContact}
                onChange={e => setNewClinic({ ...newClinic, branchContact: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddClinic}>
            Save Clinic
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ClinicBranchList;
