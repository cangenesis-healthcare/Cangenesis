import { useState } from 'react';
import './Home.scss';
import {Container, Col, Row, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import FormComponent from '../components/FormComponent';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faRadiation,} from '@fortawesome/free-solid-svg-icons';
import images from '../components/Images';
import FormAlert from '../components/FormAlert';

function Home(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  return(
    <div>
      <Navigation />
      <main>
        <section className='hero'>
          <Container>
            <Row className='align-items-center'>
              <Col lg={4}>
                <div className='title position-relative'>
                  <h2><em className='purple'>“CAN?”</em> Now Transformed Into <em className='pink'>“Genesis”</em> of Hope</h2>
                  <h6 className="mt-3">Offering Hope to All</h6>
                </div>
              </Col>
              <Col lg={4} className="offset-lg-4">
              <FormComponent 
                  isMultiStep={true} 
                  onSubmit={(data) => console.log('Submitted:', data)} 
                  submitLabel="Submit"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='treatment'>
          <Container>
            <div className="title">
              <span className="mb-3">Treatments We Offer</span>
              <h6 className="text-capitialize mb-2">We Aim to Improve Health Outcomes and Enhance the Quality of Life For Our Patients</h6>
            </div>
            <Row className='justify-content-center'>
              <Col lg={4} md={6}>
                <Card className="my-4 py-4">
                  <div className="d-flex align-items-center">
                    <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                        <img src={images['oncolog.png']} alt='Oncology'/>
                    </div>
                    <Card.Body> 
                        <h6>Oncology</h6>
                        <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                        <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                            <FormComponent />
                        </FormAlert>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="my-4 py-4">
                    <div className="d-flex align-items-center">
                        <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                            <img src={images['haematology.png']} alt="Hematology"/>
                        </div>
                        <Card.Body>
                            <h6>Hematology</h6>
                            <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                        </Card.Body>
                    </div>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="my-4 py-4">
                    <div className="d-flex align-items-center">
                        <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                            <img src={images['radiation.png']} alt="Radiation Treatment"/>
                        </div>
                        <Card.Body>
                            <h6>Radiation Treatment</h6>
                            <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                        </Card.Body>
                    </div>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                  <Card className="my-4 py-4">
                      <div className="d-flex align-items-center">
                          <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                              <img src={images['cardi.png']} alt="Cardiac, Pediatric Cardiac" />
                          </div>
                          <Card.Body>
                              <h6>Cardiac, Pediatric Cardiac</h6>
                              <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                          </Card.Body>
                      </div>
                  </Card>
              </Col>
              <Col lg={4} md={6}>
                  <Card className="my-4 py-4">
                      <div className="d-flex align-items-center">
                          <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                              <img src={images['transplant.png']} alt="Transplant" />
                          </div>
                          <Card.Body>
                              <h6>Transplants</h6>
                              <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                          </Card.Body>
                      </div>
                  </Card>
              </Col>
              <Col lg={4} md={6}>
                  <Card className="my-4 py-4">
                      <div className="d-flex align-items-center">
                          <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                              <img src={images['spine.png']} alt="Orthopedic & Spine" />
                          </div>
                          <Card.Body>
                              <h6>Orthopedic & Spine</h6>
                              <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                          </Card.Body>
                      </div>
                  </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="my-4 py-4">
                      <div className="d-flex align-items-center">
                          <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                              <img src={images['neurology.png']} alt="Neurology" />
                          </div>
                          <Card.Body>
                              <h6>Neurology</h6>
                              <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                          </Card.Body>
                      </div>
                  </Card>
              </Col>
              <Col lg={4} md={6}>
                  <Card className="my-4 py-4">
                      <div className="d-flex align-items-center">
                          <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                              <img src={images['diagnosis.png']} alt="Nephrology and Urology" />
                          </div>
                          <Card.Body>
                              <h6>Nephrology and Urology</h6>
                              <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                                <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                    <FormComponent />
                                </FormAlert>
                          </Card.Body>
                      </div>
                  </Card>
              </Col>
              <Col lg={4} md={6}>
                 <Card className="my-4 py-4">
                      <div className="d-flex align-items-center">
                        <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                          <img src={images['gastrology.png']} alt="Nephrology and Urology" />
                        </div>
                        <Card.Body>
                          <h6>Gastrology</h6>
                          <a href="#" onClick={handleOpenModal}>Know More <i className="fa"><FontAwesomeIcon icon={faChevronRight} className='fa'/></i></a>
                            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                                <FormComponent />
                            </FormAlert>
                        </Card.Body>
                      </div>
                  </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about">
          <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                    <div className="image-wrapper">
                        <img src={images['about_img.png']} alt=""/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="title">
                        <span className="text-uppercase">about us</span>
                        <h6>We envision a world where healthcare is accessible, affordable, and excellent</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum suscipit voluptas doloremque sint repellat itaque, dolor est? Assumenda explicabo totam molestias ratione officia commodi sunt quod voluptates quibusdam ipsum.</p>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta neque laborum deserunt iste nulla fuga ex, culpa quos aliquid est rem porro odio veritatis veniam architecto error dignissimos. Quidem!</p>
                </Col>
              </Row>
          </Container>
        </section>
        <section className="process">
          <Container>
            <div className="title">
                <span className="text-uppercase">our process</span>
                <h6 className="text-capitalize">How we get you the advance treatment?</h6>
            </div>
            <Row>
              <Col lg={3} md={6}>
                  <Card className="text-center my-4">
                      <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                          <img src={images['call.jpg']} alt="Call" className='img-fluid'/>
                      </div>
                      <Card.Body className="mt-2">
                          <h5>Share reports with us and Get in touch</h5>
                      </Card.Body>
                      <div className="num">
                          <span>1</span>
                      </div>
                  </Card>
              </Col>
              <Col lg={3} md={6}>
                  <Card className="text-center my-4">
                      <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                          <img src={images['reports.png']}alt="Get medical consultation and cost estimation" className='img-fluid'/>
                      </div>
                      <Card.Body className="mt-2">
                          <h5>Get medical consultation and cost estimation</h5>
                      </Card.Body>
                      <div className="num">
                          <span>2</span>
                      </div>
                  </Card>
              </Col>
              <Col lg={3} md={6}>
                  <Card className="text-center my-4">
                      <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                          <img src={images['pickup.avif']} alt="Get personal assistance" className="img-fluid" />
                      </div>
                      <Card.Body className="mt-2">
                          <h5>Get personal assistance</h5>
                      </Card.Body>
                      <div className="num">
                          <span>3</span>
                      </div>
                  </Card>
              </Col>
              <Col lg={3} md={6}>
                  <Card className="text-center my-4">
                      <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                          <img src={images['post.avif']} alt="Receive post treatment care" className='img-fluid'/>
                      </div>
                      <Card.Body className="mt-2">
                          <h5>Receive post treatment care</h5>
                      </Card.Body>
                      <div className="num">
                          <span>4</span>
                      </div>
                  </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="service">
                <Container>
                    <div className="title text-center">
                        <span className="text-uppercase">our services</span>
                        <h6>Our Special Services For You</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, laboriosam eligendi. Sit voluptatibus voluptate earum ad pariatur, debitis laborum.</p>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <Card className="text-center my-4">
                                <div className="image-wrapper d-flex align-items-center justify-content-center mx-auto">
                                    <img src={images['cost.png']} alt="Cost" />
                                </div>
                                <Card.Body className="mt-2">
                                    <h5>Medical Advice and Budget Estimation</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos similique dolore quod ab obcaecati ullam corrupti quo non consequatur alias odit, accusantium itaque.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                          <Card className="text-center my-4">
                                <div className="image-wrapper d-flex align-items-center justify-content-center mx-auto">
                                    <img src={images['services.png']} alt="Service" />
                                </div>
                                <Card.Body className="mt-2">
                                    <h5>Comprehensive Medical Care</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos similique dolore quod ab obcaecati ullam corrupti quo non consequatur alias odit, accusantium itaque.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="text-center my-4">
                                <div className="image-wrapper d-flex align-items-center justify-content-center mx-auto">
                                    <img src={images['assistance.png']} alt="Assisatnce" />
                                </div>
                                <Card.Body className="mt-2">
                                    <h5>Personalized Assistance</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos similique dolore quod ab obcaecati ullam corrupti quo non consequatur alias odit, accusantium itaque</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="text-center my-4">
                                <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                                    <img src={images['tourism.png']} alt="Travel" />
                                </div>
                                <Card.Body className="mt-2">
                                    <h5>Travel Coordination</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse blanditiis explicabo aliquam. Magnam asperiores eveniet dolore quae rerum officiis velit, accusamus obcaecati atque, vel labore aliquid id eum cupiditate.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="text-center my-4">
                                <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                                    <img src={images['visa.png']} alt="Visa Assistance"/>
                                </div>
                                <Card.Body className=" mt-2">
                                    <h5>Visa Assistance</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse blanditiis explicabo aliquam. Magnam asperiores eveniet dolore quae rerum officiis velit, accusamus obcaecati atque, vel labore aliquid id eum cupiditate.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="text-center my-4">
                                <div className="image-wrapper d-flex align-items-center justify-content-center m-auto">
                                    <img src={images['doctor.png']}alt="" />
                                </div>
                                <Card.Body className="mt-2">
                                    <h5>Post-Treatment Consultation</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse blanditiis explicabo aliquam. Magnam asperiores eveniet dolore quae rerum officiis velit, accusamus obcaecati atque, vel labore aliquid id eum cupiditate</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        <section className="contact">
            <Container>
                <Row className='align-items-center'>
                  <Col lg={6}>
                    <div className="image-wrapper">
                        <img src={images['contact.png']} alt="" className="img-fluid" />
                    </div>
                  </Col>
                  <Col lg={6}>
                        <div className="title">
                            <span>Contact us</span>
                            <h6>Get in Touch With Us!</h6>
                        </div>
                        <FormComponent 
                        isMultiStep={false} 
                        onSubmit={(data) => console.log('Submitted:', data)} 
                        submitLabel="Book Appointment" 
                      />
                    </Col>
                </Row>
            </Container>
        </section>
      </main>
    <Footer />
  </div>
  );
}
export default Home;