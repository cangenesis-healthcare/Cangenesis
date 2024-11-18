import React from "react";
import './Cost.scss';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import images from '../components/Images';
import ContactWhatsapp from "../components/ContactWhatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cost(){
    return (
        <div>
            <Navigation />
                <main>
                    <div className="cost-section">
                        <Container fluid>
                            <div className="title text-center">
                                <span className="text-uppercase">Treatment cost in India</span>
                            </div>
                            <Row>
                                <Col lg={3} md={6}>
                                    <Card>
                                        <div className="text-center py-3 px-2">
                                            <div className="image-wrapper m-auto">
                                                <img src={images['prostate-cancer.png']} alt='Prostate cancer'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Prostate cancer</h6>
                                                <p>Starts from $6000</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                        <div className="text-center py-3 px-2">
                                            <div className="image-wrapper m-auto">
                                                <img src={images['whipple-surgery.png']} alt='Whipple surgery'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Whipple surgery</h6>
                                                <p>Starts from $8000</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" /> 
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                    <div className="text-center py-3 px-2">
                                            <div className="image-wrapper m-auto">
                                                <img src={images['gastrointestinal-cancer-surgery.png']} alt='Gastrointestinal cancer surgery'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Gastrointestinal cancer</h6>
                                                <p>Starts from $6500</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                    <div className="text-center py-3 px-2">
                                            <div className="image-wrapper m-auto">
                                                <img src={images['immunotherapy.png']} alt='Immunotherapy 'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Immunotherapy </h6>
                                                <p>Starts from $6000</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                    <div className="text-center py-3 px-2">
                                            <div className="image-wrapper m-auto">
                                                <img src={images['valve-replacement.png']} alt='Valve Replacement' className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Valve Replacement  </h6>
                                                <p>Starts from $9000</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                    <div className="text-center py-3 px-2">
                                        <div className="image-wrapper m-auto">
                                                <img src={images['breast-cancer.png']} alt='Breast Cancer'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Breast Cancer</h6>
                                                <p>Starts from $5000</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                    <div className="text-center py-3 px-2">
                                        <div className="image-wrapper m-auto">
                                                <img src={images['lung-cancer.png']} alt='Lung Cancer'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Lung Cancer </h6>
                                                <p>Starts from $5500</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Card>
                                    <div className="text-center py-3 px-2">
                                        <div className="image-wrapper m-auto">
                                                <img src={images['ovarian-cancer.png']} alt='Ovarian Cancer'className="w-100" />
                                            </div>
                                            <div className="content">
                                                <h6>Ovarian Cancer</h6>
                                                <p>Starts from $6000</p>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <ContactWhatsapp label="Get Details" />
                                                    <a href="#" className="know-btn me-lg-2 text-decoration-none">Know More <i><FontAwesomeIcon icon={faChevronRight} className='fa' /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </main>
            <Footer/>
        </div>
    )
}

export default Cost;