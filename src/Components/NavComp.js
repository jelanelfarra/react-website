import { Component } from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Aos from "aos";


class NavComp extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg" className="navbar">
            <Container>
              <Navbar.Brand href="#home" className="brand" data-aos="zoom-in">أكاديمية أجاد <i class="fa-solid fa-download"></i> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link>
                    <NavLink to="/" className='nav-link'>الرئيسية</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/contact" className='nav-link'>تواصل معنا</NavLink>
                  </Nav.Link>
                  <NavDropdown title="الدبلومات" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}
export default NavComp ;