import React, { useState } from 'react';
import './FormComponents.scss';
import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import images from '../components/Images';

const FormComponent = ({
  isMultiStep = false,
  onSubmit,
  submitLabel = "Submit",
}) => {

  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    name: '',
    phone: '',
    email: '',
    department: '',
    message: ''
  });
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };
  const handleNextStep = () => {
    if (step === 1 && !formData.gender) {
      setErrors({ gender: 'Please select a gender' });
      return;
    }
    if (step === 2 && (!formData.age || formData.age <= 0 || formData.age > 120)) {
      setErrors({ age: 'Please enter a valid age between 1 and 120' });
      return;
    }
    setStep(step + 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="px-4">
      {isMultiStep && step === 1 && (
        <Col>
          <h5 className="gender-title text-center">Select Your Gender:</h5>
          <div className="d-flex justify-content-center">
            <div className="gender-wrapper text-center me-4">
              <div className="image-wrapper my-4">
                <img src={images['man.png']} alt="Male" className="img-fluid" />
              </div>
              <Form.Check type="radio" name="gender" id="male" onChange={handleInputChange} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="gender-wrapper text-center">
              <div className="image-wrapper my-4">
                <img src={images['women.png']} alt="Female" className="img-fluid" />
              </div>
              <Form.Check type="radio" name="gender" id="female" onChange={handleInputChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className='mt-4 d-flex justify-content-center'>
          {errors.gender && <p className="text-danger mt-2">{errors.gender}</p>}
          <Button onClick={handleNextStep} className="mt-4 wa-btn">
            Next <i className='fa'><FontAwesomeIcon icon={faChevronRight} /></i> 
          </Button>
          </div>
        </Col>
      )}
      {isMultiStep && step === 2 && (
        <Col xs={12}>
          <h5 className="title text-center">Enter Your Age:</h5>
          <Form.Control type="number" name="age" min="1" max="120" placeholder="Enter Your Age" value={formData.age} onChange={handleInputChange} required />
          <div className="mt-4 d-flex justify-content-center">
           {errors.age && <p className="text-danger mt-2">{errors.age}</p>}
            <Button onClick={handleNextStep} className="wa-btn">
              Next <i className='fa'><FontAwesomeIcon icon={faChevronRight} /></i> 
            </Button>
          </div>
        </Col>
      )}
      {(step === 3 || !isMultiStep) && (
        <>
          <Form.Group className='mb-3'>
            <Form.Control type="text" name="name" placeholder="Peter Parker" value={formData.name} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Control type="tel" name="phone" placeholder="+91 1234567890" value={formData.phone} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Control type="email" name="email" placeholder="peter@gmail.com" value={formData.email} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Select name="department" value={formData.department} onChange={handleInputChange} required>
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Transplants">Transplants</option>
              <option value="Orthopedic & Spine">Orthopedic & Spine</option>
              <option value="Nephrology and Urology">Nephrology and Urology</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Control as="textarea" name="message" rows="3" placeholder="Message" value={formData.message} onChange={handleInputChange} required />
          </Form.Group>
          <Button type="submit" className=" primary-btn wa-btn ms-0 mt-4">{submitLabel}<i className='fa'><FontAwesomeIcon icon={faChevronRight} /></i> </Button>
        </>
      )}
    </Form>
  );
};

export default FormComponent;
