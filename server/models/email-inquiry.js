/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  website: String,
  refferal: String,
  budget: String,
  startDate: String,
  projectDescription: String
});

const emailModel = mongoose.model('emailInquiry', emailSchema);

module.exports = emailModel;
