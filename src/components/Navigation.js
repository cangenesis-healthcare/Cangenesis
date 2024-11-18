import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.scss';
import {Container, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import images from './Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';    

function Navigation(){
    return(
        <header>
             <div className="strip-1 d-flex justify-content-end p-3 ms-auto">
                <Container>
                    <div className="row">
                         <div className="col-lg-6">
                            <ul className="d-flex me-auto p-0 mb-0 align-items-center contact-list">
                                <li className="list-unstyled me-4">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                <a href="mailto:info@cangenesis.com">info@cangenesis.com</a>
                                </li>
                                <li className="list-unstyled">
                                <FontAwesomeIcon icon={faPhone} className="me-2" />
                                <a href="tel:+918698693636">+91 8698693636</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="d-flex align-items-center justify-content-lg-end mb-0 social-list ps-0 mt-lg-0 mt-2">
                                <li className="list-unstyled mx-2">
                                <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li className="list-unstyled mx-2">
                                <FontAwesomeIcon icon={faWhatsapp} />
                                </li>
                                <li className="list-unstyled mx-2">
                                <FontAwesomeIcon icon={faLinkedin} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
             </div>
             <Navbar expand="lg" bg="light" variant="light" className="py-4 w-100 position-relative">
                <Container>
                    <Navbar.Brand href="index.html">
                        <img src={images['logo.png']} alt="Logo" width="200" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className='mx-2'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors" className='mx-2'>Doctors</Nav.Link>
                        <NavDropdown title="Hospitals" id="nav-dropdown d-lg-flex" className='mx-2'>
                            <NavDropdown.Item href='/apollo'>Apollo Hospitals</NavDropdown.Item>
                            <NavDropdown.Item href='/fortis'>Fortis Hospital</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/cost"  className='mx-2'>Cost</Nav.Link>
                        <Nav.Link as={Link} to="/cart"  className='mx-2'>CAR-T</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className='mx-2'>Contact</Nav.Link>
                        </Nav>
                        <a href="#" className="text-capitalize default-btn">
                        Get a quote <i className="fas"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></i>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation;