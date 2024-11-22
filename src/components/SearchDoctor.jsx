import React, { useState, useEffect } from "react";
import './SearchDoctor.scss';
import { Card, CardBody, Col, Row } from "react-bootstrap";
import ContactWhatsapp from "./ContactWhatsapp"; 
import AppointmentButton from "./AppointmentButton";

const SearchDoctor = () => {
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctorImages, setDoctorImages] = useState({});

  const options = [
    "Oncology",
    "Hematology",
    "Cardiac",
    "Pediatric Cardiac",
    "Transplants",
    "Orthopedic & Spine",
    "Neurology",
    "Nephrology and Urology",
    "CAR-T",
    "Bone Marrow Transplant",
    "Lung Cancer",
  ];

  const popularSearches = [
    "CAR-T",
    "Bone Marrow Transplant",
    "Oncology",
    "Neurology",
  ];

  const fetchDoctors = async (specialization) => {
    try {
      const response = await fetch(`http://localhost:5000/api/doctors?specialization=${specialization}`);
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setSpecialization(selectedOption);
    if (selectedOption) {
      fetchDoctors(selectedOption);
    } else {
      setDoctors([]);
    }
  };

  const handlePopularSearchClick = (option) => {
    setSpecialization(option);
    fetchDoctors(option);
  };

  const getDoctorImageUrl = async (doctorName) => {
    const formattedName = doctorName.replace(/ /g, "_");
    const webpPath = `http://localhost:5000/images/${formattedName}.webp`;
    const jpgPath = `http://localhost:5000/images/${formattedName}.jpg`;

    try {
      const webpResponse = await fetch(webpPath, { method: "HEAD" });
      if (webpResponse.ok) {
        return webpPath;
      }
    } catch (error) {
      console.error("WebP image not found:", error);
    }

    return jpgPath;
  };


  useEffect(() => {
    const loadDoctorImages = async () => {
      const images = {};
      for (const doctor of doctors) {
        const imageUrl = await getDoctorImageUrl(doctor.name);
        images[doctor.name] = imageUrl;
      }
      setDoctorImages(images);
    };

    if (doctors.length > 0) {
      loadDoctorImages();
    }
  }, [doctors]);


  return (
    <div>
      <div className="search-bar text-center">
          <select value={specialization} onChange={handleOptionChange}>
            <option value="">Select Specialization</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>

      <div className="popular-search text-center mt-4">
      <h3>Popular Searches</h3>
      <div style={{ marginBottom: "10px" }}>
        {popularSearches.map((option) => (
          <button
            key={option}
            onClick={() => handlePopularSearchClick(option)}
            className="search-option-btn"
          >
            {option}
          </button>
        ))}
      </div>
      </div>
        <Row className="align-items-center">
                 {/* Display Filtered Doctors */}
                {specialization ? (
                  <div className="doctor-list d-flex flex-wrap align-items-center justify-content-center">
                    {doctors.length > 0 ? (
                      doctors.map((doctor, index) => (
                        <Col md={6} key={index}>
                        <Card className="doctor-card">
                          <div className="d-lg-flex align-items-center justify-content-center">
                          <div className="image-wrapper">
                          <img
                              src={doctorImages[doctor.name]}
                              alt={doctor.name}
                              className="w-100"
                              style={{ height: "250px", objectFit: "cover" }}
                            />
                          </div>
                          <CardBody className="content p-4">
                            <h5>{doctor.name}</h5>
                            <h6>{doctor.speciality.join(" | ")}</h6>
                            <span>(20 Years Experience)</span> {/* Update this based on your data */}
                            <div className="d-lg-flex justify-content-satrt text-center mt-3">
                              <div className="d-lg-block d-flex justify-content-center me-lg-2 mb-lg-0 mb-2">
                                <ContactWhatsapp label="Get Details" />
                              </div>
                              <AppointmentButton label="Book Appointment" />
                            </div>
                          </CardBody>
                          </div>
                        </Card>
                        </Col>
                      ))
                    ) : (
                      <p className="text-center">No doctors found for the selected specialization.</p>
                    )}
                  </div>
                ) : (
                  <p className="text-center">Please select a specialization to view doctors.</p>
                )}
        </Row>
    </div>
  );
};

export default SearchDoctor;
