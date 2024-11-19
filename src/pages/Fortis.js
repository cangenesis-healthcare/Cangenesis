import './Hospitals.scss';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import images from '../components/Images';
import ContactWhatsapp from "../components/ContactWhatsapp";
import AppointmentButton from "../components/AppointmentButton";

function FortisHospital(){
    return(
        <div>
            <Navigation/>
            <main>
                <section className="hospital-about">
                    <div className="title">
                            <div className="title text-center">
                                <span className="text-uppercase">Treatment at Fortis Hospital</span>
                            </div>
                    </div>
                    <Container>
                        <Row className="align-items-center">
                        <Col lg={6}>
                                <div className="image-wrapper">
                                    <img src={images['fortis_about_img.webp']} alt='Fortis Hospital'className="w-100" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <p>Fortis Hospital is one of the leading healthcare providers in India, with a network of hospitals across the country. It is part of Fortis Healthcare, a renowned chain of hospitals that offers a wide range of medical services, including general medicine, surgery, cardiology, oncology, neurology, orthopedics, and more.</p>
                                <p>With multiple locations, Fortis is known for delivering comprehensive healthcare, from primary treatment to advanced procedures. The hospital's emphasis on innovation and quality in healthcare has made it a trusted name in both domestic and international healthcare markets.</p>
                                <p>Fortis Hospital has entered into an agreement with Cangenesis Healthcare to expand its reach in providing healthcare services to international patients. Under this partnership, Cangenesis Healthcare facilitates medical treatment for patients from various global regions who seek treatment at Fortis Hospitals in India. While Cangenesis handles the logistics, such as patient coordination and support, all medical consultations, diagnosis, and treatment are exclusively managed by Fortis Hospital expert team.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="hospital-location">
                    <Container fluid>
                        <div className="title text-center">
                            <span>Fortis Hospital in India</span>
                        </div>
                        <Row>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_mumbai_kalyan.webp']} alt='Fortis Mumbai Kalyan' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis hospital, kalyan, mumbai</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_mulund_baneer.webp']} alt='Fortis Mulund Baneer' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis hospital, mulund, mumbai</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_south_rajajinagar.webp']} alt='Fortis South Rajajinagar' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis hospital, rajajinagar, Banglore</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_shalimar_new_delhi.webp']} alt='Fortis Shalimar New Delhi' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis hospital, shalimar bagh, new delhi</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_nagarbhavi_bengalore.webp']} alt='Fortis Nagarbhavi Bangalore' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis hospital, shalimar bagh, new delhi</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_mumbai_raheja.webp']} alt='Fortis Mumbai Raheja' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>s l raheja hospital, mumbai</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_defence_colony.webp']} alt='Fortis Defence Colony' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis cancer institute, defence colony, new delhi</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_punjab_amritsar.webp']} alt='Fortis Punjab Amritsar' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis escorts hospital, amritsar</h5>
                                        <div className="d-lg-flex justify-content-between text-center mt-3">
                                            <div className="d-lg-block d-flex justify-content-center mb-lg-0 mb-2">
                                                <ContactWhatsapp label="Get Details" />
                                            </div>
                                            <AppointmentButton label="Book Appointment"/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} md={6}>
                                <Card className="card">
                                    <div className="image-wrapper">
                                        <img src={images['fortis_banglore.webp']} alt='Fortis Banglore' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center">
                                        <h5>fortis hospital b g road bangalore</h5>
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
                <section className="hospital-doctors">
                    <div className="title text-center">
                        <span>Doctors of Fortis Hospital</span>
                        <h6>Qui magna est amet ut in eiusmod proident</h6>
                    </div>
                    <Container fluid>
                        <Row className='justify-content-center'>
                            <Col lg={3} md={6}>
                                <Card>
                                    <div className="image-wrapper">
                                        <img src={images['fortis_doc_1.webp']} alt='Dr. Vinod Raina' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Vinod Raina</h5>
                                        <h6>Medical Oncologist</h6>
                                        <span>(40 Years Experience)</span>
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
                                        <img src={images['fortis_doc_2.webp']} alt='Dr. Anil Saxena' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Anil Saxena</h5>
                                        <h6 className="mb-0">Electrophysiologist</h6>
                                        <span>(31 Years Experience)</span>
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
                                        <img src={images['fortis_doc_3.webp']} alt='Dr. Vedant Kabra' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Vedant Kabra</h5>
                                        <h6>Surgical Oncologist</h6>
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
                                        <img src={images['fortis_doc_4.webp']} alt='Dr. Z S Meharwal' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Z S Meharwal</h5>
                                        <h6>Adult CTVS</h6>
                                        <span>(35 Years Experience)</span>
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
                                        <img src={images['fortis_doc_5.webp']} alt='Dr. Ashok Omar' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Ashok Omar</h5>
                                        <h6>Non-Invasive Cardiologist</h6>
                                        <span>(33 Years Experience)</span>
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
                                        <img src={images['fortis_doc_6.webp']} alt='Dr. Krishna Subramony Iyer' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Krishna Subramony Iyer</h5>
                                        <h6>Paediatric CTVS</h6>
                                        <span>(40 Years Experience)</span>
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
                                        <img src={images['fortis_doc_7.webp']} alt='Dr. Sandeep Nayak P' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Sandeep Nayak P</h5>
                                        <h6>Surgical Oncology | Robotic Surgery</h6>
                                        <span>(24 Years Experience)</span>
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
                                        <img src={images['fortis_doc_8.webp']} alt='Dr. Boman Nariman Dhabhar' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Boman Nariman Dhabhar</h5>
                                        <h6>Medical Oncologist</h6>
                                        <span>(40 Years Experience)</span>
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
                                        <img src={images['fortis_doc_9.webp']} alt='Dr. Subhaprakash Sanyal' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Subhaprakash Sanyal</h5>
                                        <h6>Adult &amp; Pediatric Haemato Oncologist and BMT | CAR-T</h6>
                                        <span>(26 Years Experience)</span>
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
                                        <img src={images['fortis_doc_10.webp']} alt='Dr. Arun Behl' className="w-100"/>
                                    </div>
                                    <CardBody className="content text-center p-4">
                                        <h5>Dr. Arun Behl</h5>
                                        <h6>Surgical Oncologist</h6>
                                        <span>(46 Years Experience)</span>
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

export default FortisHospital;