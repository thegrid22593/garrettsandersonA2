/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const db = require('./../db/db.js');
const testimonialModel = require('./../models/testimonial');
const Project = require('../models/web-projects');
const multer = require('multer');

const upload = multer({ dest: './uploads/' });

router.get('/projects', (req, res) => {
  Project.find(function (err, projects) {
     if(!err) {
       res.json(projects);
     } else {
       console.log(err);
     }
  });
});

router.post('/projects', upload.any(), (req, res) => {
  
  // var project = new Project({
  //   name: req.body.name,
  //   description: req.body.description,
  //   technologies: req.body.technologies
  // });

  // project.save((err) => {
  //   if(err) console.log(err);
  // });
});

module.exports = router;
