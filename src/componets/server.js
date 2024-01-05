
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB (replace 'your_database' with your MongoDB database)
mongoose.connect('mongodb+srv://joyal:joyal@cluster0.6bawf6e.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB Schema for worker data
const workerSchema = new mongoose.Schema({
  name: String,
  contact: String,
  experience: String,
  education: String,
  professionalRole: String,
  skill: String,
  overview: String,
  resume: String, // You might store file paths or use GridFS for file storage
});

const Worker = mongoose.model('Worker', workerSchema);

// Handle form submission
app.post('/submit-worker-form', (req, res) => {
  const { name, contact, experience, education, professionalRole, skill, overview, resume } = req.body;

  // Create a new worker instance
  const newWorker = new Worker({
    name,
    contact,
    experience,
    education,
    professionalRole,
    skill,
    overview,
    resume,
  });

  // Save the worker data to MongoDB
  newWorker.save((err) => {
    if (err) {
      res.status(500).send('Error saving worker data');
    } else {
      res.status(200).send('Worker data saved successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
