const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images'))); 


const getDoctorsData = () => {
  const data = fs.readFileSync(path.join(__dirname, 'doctors.json'), 'utf8');
  return JSON.parse(data);
};

app.get("/api/doctors", (req, res) => {
  const { specialization } = req.query;
  console.log('Received specialization:', specialization); // Debugging
 let doctors = getDoctorsData(); 
  if (!specialization) {
    return res.json(doctors);
  }

  const filteredDoctors = doctors.filter((doctor) => {
    const doctorSpecializations = doctor.specialization || []; 
    return doctorSpecializations.some((spec) =>
      spec.toLowerCase().includes(specialization.toLowerCase())
    );
  });

  res.json(filteredDoctors);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
