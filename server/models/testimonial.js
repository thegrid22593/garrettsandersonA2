/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = mongoose.Schema({
  author: String,
  client: String,
  content: String
});

const testimonialModel = mongoose.model('testimonial', testimonialSchema);

module.exports = testimonialModel;
