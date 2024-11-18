import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from '../assets/images/logo_white.png';
import footerImage from '../assets/images/footer-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'; 
import images from '../components/Images';

function Footer(){
    return(
        <footer>
            <div className="footer-image-wrapper">
                <img src={footerImage} alt="Footer Image" />
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="footer-title-wrapper d-lg-flex justify-content-center align-items-center">
                            <h4 className="text-capitalize mb-lg-0 mb-3">A step closer <em>to healing</em><i className="fas fa-arrow-right ms-4"></i></h4>
                            <div className="quote-wrapper ms-lg-4">
                                <a href="#" className="text-capitalize default-btn">Get a quote <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="logo my-lg-0 my-4">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={2} md={6}>
                        <ul className="footer-wrapper">
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Why Cangenesis?</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Our mission</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Our team</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">FAQ</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Career</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="contact.html" className="text-capitalize">Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2} md={6}>
                        <ul className="footer-wrapper">
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Doctors</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="hospital.html" className="text-capitalize">Hospitals</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Patient Stories</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2} md={6}>
                        <ul className="footer-wrapper p-0">
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Terms &amp; conditions</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Disclaimer</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#" className="text-capitalize">Privacy Policy</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul className="footer-wrapper">
                            <li className="list-unstyled">
                            <FontAwesomeIcon icon={faPhone} className="me-2" /><a href="tel:+918698693636">+91 8698693636</a>
                            </li>
                            <li className="list-unstyled">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" /><a href="mailto:info@cangenesis.com">info@cangenesis.com</a>
                            </li>
                            <li className="list-unstyled">
                            <FontAwesomeIcon icon={faLocationDot} className="me-2" /> <a href="#">Kohinoor Apartment, N C. Kelkar Marg, Dadar West, Dadar, Mumbai, Maharashtra 400028</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={12}>
                        <div className="copyright-wrapper d-flex justify-content-center pt-4">
                            <div className="copyright">© 2024 All Rights Reserved to Cangenesis Healthcare</div>
                            <ul className="d-flex align-items-center p-0 mb-0 ms-auto social-list">
                                <li className="list-unstyled mx-3">
                                    <a href="#" className="text-decoration-none" target="_blank"><i className="fa"><FontAwesomeIcon icon={faFacebookF} className="mr-2" /></i></a>
                                </li>
                                <li className="list-unstyled mx-3">
                                    <a href="#" className="text-decoration-none" target="_blank"><i className="fa"><FontAwesomeIcon icon={faWhatsapp} className="mr-2" /></i></a>
                                </li>
                                <li className="list-unstyled mx-3">
                                    <a href="#" className="text-decoration-none" target="_blank"><i className="fa"><FontAwesomeIcon icon={faLinkedin} className="mr-2" /></i></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;