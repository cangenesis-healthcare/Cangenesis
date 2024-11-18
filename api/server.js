const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images'))); 

const doctors = [
  { name: "Dr. Vinod Raina", specialization: ["Oncology", "Cancer", "Medical Oncology"], speciality: ["Medical Oncology"]},
  { name: "Dr. Ashok Omar", specialization: ["Cardiac", "Non-Invasive Cardiologist"], speciality: ["Non-Invasive Cardiologist"] },
  { name: "Dr. Ari G. Chacko", specialization: ["Neurology"], speciality: ["Neurosurgeon"] },
  { name: "Dr. Subhaprakash Sanyal", specialization: ["Pediatric Oncology", "Hematology", "Bone Marrow Transplant", "BMT", "CAR-T", "Oncology"], speciality: ["Adult & Pediatric Haemato Oncologist and BMT | CAR-T "],},
  { name: "Dr. Arun Behl", specialization: ["Surgical Oncology", "Oncology"], speciality: ["Surgical Oncology"],},
  { name: "Dr. Boman Nariman Dhabhar", specialization: ["Medical Oncology", "Oncology"], speciality: ["Medical Oncology"], },
  { name: "Dr. Sandeep Nayak", specialization: ["Surgical Oncology", "Robotic Surgery", "Oncology"], speciality: ["Surgical Oncology | Robotic Surgery"],},
  { name: "Dr. Krishna Subramony Iyer", specialization: ["Paediatric CTVS", "Cardio vascular and thoracic surgery", "CTVS"], speciality: ["Paediatric CTVS"], },
  { name: "Dr. Z S Meharwal", specialization: ["Paediatric CTVS", "Cardio vascular and thoracic surgery", "CTVS"], speciality: ["Adult CTVS"], },
  { name: "Dr. Vedant Kabra", specialization: ["Surgical Oncology", "Oncology"], speciality:["Surgical Oncology"] },
  { name: "Dr. Anil Saxena", specialization: ["Electrophysiologist", "EP"], speciality: ["Electrophysiologist"] },
  { name: "Dr. Kumar Gubbala", specialization: ["Consultant - Gynaecological Oncology", "Gynaecological Oncology", "Oncology"], speciality: ["Consultant - Gynaecological Oncology"] },
  { name: "Dr. Khader Hussain", specialization: ["Consultant - Thoracic Surgical Oncology", "Thoracic Surgical Oncology", "Oncology"], speciality:["Consultant - Thoracic Surgical Oncology"] },
  { name: "Dr. Jose M Easow", specialization: ["Senior Consultant - Medical Oncology & Hematology", "Medical Oncology", "Hematology"], speciality:["Senior Consultant - Medical Oncology & Hematology"],}
];

app.get("/api/doctors", (req, res) => {
  const { specialization } = req.query;
  console.log('Received specialization:', specialization); // Debugging

  if (!specialization) {
    return res.json(doctors);
  }

  const filteredDoctors = doctors.filter((doctor) => {
    const doctorSpecializations = doctor.specialization || []; // Default to empty array if undefined
    return doctorSpecializations.some((spec) =>
      spec.toLowerCase().includes(specialization.toLowerCase())
    );
  });

  res.json(filteredDoctors);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports.handler = serverless(app);