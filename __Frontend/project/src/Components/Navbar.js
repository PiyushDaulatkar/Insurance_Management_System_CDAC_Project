import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, NavLink } from 'react-bootstrap';
import { useAuth } from "../Context/Auth";
import "../CSS/Navbar.css"

function MyNavbar() {
  const { isLoggedIn } = useAuth();
  return (
    <div className='nav-div'>
      <Navbar collapseOnSelect expand="lg" className="bg-body-danger" bg="dark" data-bs-theme="dark">
        <Container>
          {localStorage.getItem('vendorId') ?
            <NavLink href="/vendor/home" style={{ color: 'white' }}><Navbar.Brand href="/vendor/home" className='white-color'>Insurance Management System</Navbar.Brand></NavLink>
            :
            <NavLink href="/home" style={{ color: 'white' }}><Navbar.Brand href="#home" className='white-color'>Insurance Management System</Navbar.Brand></NavLink>
          }
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {localStorage.getItem('token') ?
              <>
                {
                  localStorage.getItem('clientId') ?
                    <Nav >
                      {/* <NavLink href="/claims" style={{ color: "white" }}>Claims</NavLink> */}
                      <NavLink href="/profile" style={{ color: "white" }}>MyProfile</NavLink>
                      <NavLink href="/mypolicies" style={{ color: "white" }}>MyPolicies</NavLink>
                      <NavLink href="/logout" style={{ color: "white" }}>Logout</NavLink>
                    </Nav>
                    :
                    <Nav>
                      <NavDropdown title="Add Insurance" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/vendor/addinsurance/car">Car</NavDropdown.Item>
                        <NavDropdown.Item href="/vendor/addinsurance/home">Home</NavDropdown.Item>
                        <NavDropdown.Item href="/vendor/addinsurance/health">Health</NavDropdown.Item>
                        <NavDropdown.Item href="/vendor/addinsurance/travel">Travel</NavDropdown.Item>
                      </NavDropdown>
                      {/* <NavLink href="/vendor/addinsurance" style={{ color: "white" }}>AddInsurance</NavLink> */}
                      <NavLink href="/logout" style={{ color: "white" }}>Logout</NavLink>
                    </Nav>
                }
              </>
              :
              <Nav>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">as a Buyer</NavDropdown.Item>
                  <NavDropdown.Item href="/vendor/login">as a Vendor</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Register" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/register">as a Buyer</NavDropdown.Item>
                  <NavDropdown.Item href="/vendor/register">as a Vendor</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;