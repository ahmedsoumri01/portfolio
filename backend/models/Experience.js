const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExperienceSchema = new Schema({
  company: {
      type: String, // Organization name
      required: true,
    },
    title: {
      type: String, // Job title or role
      required: true,
    },
    description: {
      type: String, // Optional: Detailed description of the work done
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    location: {
      type: String, // Location of the job
    },
    present: {
      type: Boolean,
      default: false, // If true, indicates ongoing work
    }
  });
  
  module.exports = mongoose.model('Experience', ExperienceSchema);
  