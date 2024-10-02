const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SkillsSchema = new Schema({
    name: {
      type: String,
      required: true, // Name of the skill
    },
    skillImage: {
      type: String, // URL for the skill image
      required: true,
    }
  });
  
  module.exports = mongoose.model('Skill', SkillsSchema);
  