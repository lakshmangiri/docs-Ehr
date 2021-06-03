const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  contactNo: { type: String, required: true },
  gender: { type: String, required: true },
  martialStatus: { type: String, required: true },
  dob: { type: String, required: true },
  age: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
  bmi: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  alcoholConsumption: { type: String,  required: true},
  smokingHabits: { type: String,  required: true},
  allergies: { type: String,  required: true},
  currentMedications: { type: String,  required: true},
  pastMedications: { type: String,  required: true},
});

module.exports = mongoose.model('PatientPost', postSchema);
