import React from 'react';
import './Contact.scss';
import {Container, Col, Row, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import FormComponent from '../components/FormComponent';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../components/Images';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <div>
        <Navigation /> 
        <main>
            <section className="contact">
                <Container>
                    <div className="title">
                        <div className="title text-center">
                            <span className="text-uppercase">contact us</span>
                            <h6 className="text-capitalize">We would like to be part of your healing journey</h6>
                        </div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="image-wrapper">
                                <img src={images['contact_2.jpg']} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                        <FormComponent 
                            isMultiStep={false} 
                            onSubmit={(data) => console.log('Submitted:', data)} 
                            submitLabel="Book Appointment" 
                        />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="map">
                <Container fluid>
                    <Row className="row align-items-start">
                        <Col lg={3}>
                            <Card className="py-4">
                                <div className="d-flex align-items-center">
                                    <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                                        <i className="fa"><FontAwesomeIcon icon={faPhone} className="mx-2" /></i>
                                    </div>
                                    <Card.Body> 
                                        <p><a href="tel:+918698693636">+91 8698693636</a></p>
                                    </Card.Body>
                                </div>
                            </Card>
                            <Card className="py-4">
                                <div className="d-flex align-items-center">
                                    <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                                        <i className="fa"><FontAwesomeIcon icon={faEnvelope} className="mx-2" /></i>
                                    </div>
                                    <Card.Body> 
                                        <p><a href="mailto:info@cangenesis.com">info@cangenesis.com</a></p>
                                    </Card.Body>
                                </div>
                            </Card>
                            <Card className="py-4">
                                <div className="d-flex align-items-center">
                                    <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                                        <i className="fa" aria-hidden="true"><FontAwesomeIcon icon={faLocationDot} className="mx-2" /></i>
                                    </div>
                                    <Card.Body className="card-body"> 
                                        <p><a href="#">Kohinoor Apartment, N C. Kelkar Marg, Dadar West, Dadar, Mumbai, Maharashtra 400028</a></p>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={9}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.940311400791!2d72.8406318!3d19.0203792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf737ad93d71%3A0x49dd2e7d69c575a2!2sCangenesis%20Healthcare!5e0!3m2!1sen!2sin!4v1731917159435!5m2!1sen!2sin" width="100%" height="500" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
        <Footer />
      </div>
    )
}

export default Contact;