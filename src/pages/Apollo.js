import React from "react";
import './Hospitals.scss';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import images from '../components/Images';
import ContactWhatsapp from "../components/ContactWhatsapp";
import AppointmentButton from "../components/AppointmentButton";

function ApolloHospital(){
    return(
        <div>
            <Navigation/>
            <main>
                <section className="hospital-about">
                    <div className="title">
                            <div className="title text-center">
                                <span className="text-uppercase">Treatment at Apollo Hospital</span>
                            </div>
                    </div>
                    <Container>
                        <Row className="align-items-center">
                        <Col lg={6}>
                                <div className="image-wrapper">
                                    <img src={images['apollo_about_img.webp']} alt='Apollo Hospital'className="w-100" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <p>Apollo Hospitals is a leading healthcare provider in India, founded in 1983 by Dr. Prathap C. Reddy. It has played a pivotal role in transforming the private healthcare sector in India by introducing advanced medical technologies and high standards of clinical care. With over 71 hospitals in India and Internationally, Apollo Hospitals offers specialized treatments in cardiology, oncology, orthopedics, transplants, and more.</p>
                                <p>Apollo's patient-centric approach and commitment to innovation have transformed healthcare delivery, including the development of Apollo TeleHealth services, which provides virtual consultations and telemedicine solutions across the globe. This makes quality healthcare accessible to millions of patients worldwide.</p>
                                <p>Apollo's patient-centric approach and commitment to innovation have transformed healthcare delivery, including the development of Apollo TeleHealth services, which provides virtual consultations and telemedicine solutions across the globe. This makes quality healthcare accessible to millions of patients worldwide.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="hospital-location">
                    <Container fluid>
                        <div className="title text-center">
                            <span>Apollo Hospitals in India</span>
                            <h6>available locations : navi-mumbai, delhi, banglore, chennai</h6>
                        </div>
                        <Row>
                            <Col lg={3} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['apollo_navi_mumbai.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>apollo hospitals - navi mumbai</h5>
                                        <p>Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai - 400614</p>
                                        <div className="d-flex justify-content-between">
                                            <ContactWhatsapp label="Get Details" />
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['apollo_delhi.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>Indraprastha Apollo Hospitals</h5>
                                        <p>Sarita Vihar, Delhi Mathura Road, New Delhi - 110076 (India)</p>
                                        <div className="d-flex justify-content-between">
                                            <ContactWhatsapp label="Get Details" />
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['apollo_banglore.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>Apollo Hospitals, Bangalore</h5>
                                        <p>154 / 11, Bannerghatta Road, Opp. I.I.M, Bangalore - 560 076.</p>
                                        <div className="d-flex justify-content-between">
                                            <ContactWhatsapp label="Get Details" />
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['apollo_chennai.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>Apollo Proton Cancer Centre</h5>
                                        <p>Sarabai Instronic Estate 7th St, Dr. Vasi Estate, Tharamani, Chennai, Tamil Nadu 600041</p>
                                        <div className="d-flex justify-content-between">
                                            <ContactWhatsapp label="Get Details" />
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="hospital-doctors">
                    <div className="title text-center">
                        <span>Doctors of Apollo Hospitals</span>
                        <h6>Qui magna est amet ut in eiusmod proident</h6>
                    </div>
                    <Container fluid>
                        <Row>
                            <Col lg={3} md={6}>
                                <Card>
                                    <div className="image-wrapper">
                                        <img src={images['apollo_doc_1.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Jose M Easow</h5>
                                        <h6>Senior Consultant - Medical Oncology & Hematology</h6>
                                        <span>(20 Years Experience)</span>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} md={6}>
                                <Card>
                                    <div className="image-wrapper">
                                        <img src={images['apollo_doc_2.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-3">
                                        <h5>Dr. Ari G. Chacko</h5>
                                        <h6 className="mb-0">Senior Consultant - Neurosurgery</h6>
                                        <h6>Director Of Neurosciences</h6>
                                        <span>(30 Years Experience)</span>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} md={6}>
                                <Card>
                                    <div className="image-wrapper">
                                        <img src={images['apollo_doc_3.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Khader Hussain</h5>
                                        <h6>Consultant - Thoracic Surgical Oncology</h6>
                                        <span>(10 Years Experience)</span>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} md={6}>
                                <Card>
                                    <div className="image-wrapper">
                                        <img src={images['apollo_doc_4.jpg']} alt='Apollo Navi Mumbai' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Kumar Gubbala</h5>
                                        <h6>Consultant - Gynaecological Oncology</h6>
                                        <span>(13 Years Experience)</span>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default ApolloHospital;