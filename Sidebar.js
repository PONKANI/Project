import React from 'react'
import { BagPlusFill, Calendar2Check, CardText, FileBarGraph, GridFill, Headphones, HospitalFill, Option, Person, PersonCircle, RecordBtnFill, Ubuntu, UsbDriveFill, WindowFullscreen } from 'react-bootstrap-icons'

function Sidebar() {
  return (
    <div class="container-fluid sidebar bg-body-tertiary ">
    <div class="row">
      <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary "   >
        <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel" style={{ backgroundColor: 'grey' }} >
     
          <div >
            <ul className="nav flex-column"  >
              <li className="nav-item" >
                <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                  Zendenta
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <HospitalFill size={18} style={{ color: 'grey' }} />
                  Avicena Clinic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <GridFill size={18} style={{ color: 'grey' }} />
                  Dashboard
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>CLINIC</span>
            </h6>

            <ul className="nav flex-column mb-auto" >
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <Calendar2Check size={18} style={{ color: 'grey' }} />
                  Reservations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <PersonCircle size={18} style={{ color: 'grey' }} />
                  Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <BagPlusFill size={18} style={{ color: 'grey' }} />
                  Treatments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <Person size={18} style={{ color: 'grey' }} />
                  Staff List
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Finance</span>
            </h6>

            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <RecordBtnFill size={18} style={{ color: 'grey' }} />
                  Accounts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <FileBarGraph size={18} style={{ color: 'grey' }} />
                  Sales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <CardText size={18} style={{ color: 'grey' }} />
                  Purchase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <WindowFullscreen size={18} style={{ color: 'grey' }} />
                  Payment Method
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Physical Asset</span>
            </h6>

            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <UsbDriveFill size={18} style={{ color: 'grey' }} />
                  Stocks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <Option size={18} style={{ color: 'grey' }} />
                  Peripherals
                </a>
              </li>
            </ul>

            <hr className="my-3" />

            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <Ubuntu size={18} style={{ color: 'grey' }} />
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#">
                  <Headphones size={18} style={{ color: 'grey' }} />
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        </div>
        
      </div>
   
  )
}

export default Sidebar