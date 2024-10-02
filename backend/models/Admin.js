const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true, // Ensure each admin has a unique username
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, // Store hashed passwords for security
    }
  });
  
  module.exports = mongoose.model('Admin', AdminSchema);
  