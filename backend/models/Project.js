const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true, // URL of the cover image
  },
  images: [{
    type: String, // Array of URLs for project detail images
  }],
  description: {
    type: String,
    required: true,
  },
  stack: [{
    type: String, // Technologies or tools used in the project
  }],
  sourceCode: {
    type: String, // GitHub link
    required: true,
  },
  liveDemo: {
    type: String, // Deployment link
    required: true,
  },
  status: {
    type: String,
    enum: ['completed', 'onprogress'], // Project status
    required: true,
    default: 'onprogress',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  present: {
    type: Boolean,
    default: false, // If true, the project is ongoing
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
