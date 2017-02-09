/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  name: String,
  category: String,
  projectDetails: String,
  projectImages: Array,
  technologies: String,
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
