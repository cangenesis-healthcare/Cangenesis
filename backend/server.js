const express = require("express");
const cors = require("cors");
const path = require("path");
const doctors = require("./doctors.json");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve doctors API
app.get("/api/doctors", (req, res) => {
  const { specialization } = req.query;
  console.log('Received specialization:', specialization); // Debugging

  if (!specialization) {
    return res.json(doctors);
  }

  const filteredDoctors = doctors.filter((doctor) => {
    const doctorSpecializations = doctor.specialization || []; // Default to empty array if undefined
    return doctorSpecializations.some((spec) =>
      spec.toLowerCase() === specialization.toLowerCase()
    );
  });

  console.log("Filtered Doctors:", filteredDoctors); // Debugging
  res.json(filteredDoctors);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
