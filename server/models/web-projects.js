const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const webProject = new Schema({
  name: String,
  category: String,
  projectDetails: String
});

const project = mongoose.model('project', webProject);

module.exports = webProject;
