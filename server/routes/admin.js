/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const db = require('./../db/db.js');
const testimonialModel = require('./../models/testimonial');
const Project = require('../models/web-projects');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/projects', (req, res) => {
  console.log('you hit projects');
  Project.find(function (err, projects) {
     if(!err) {
       console.log(projects);
       res.json(projects);
     } else {
       console.log(err);
     }
  });
});

router.post('/projects', upload.single('featured-image'), (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  var project = new Project({
    name: req.body.name,
    description: req.body.description,
    technologies: req.body.technologies
  });

  project.save((err) => {
    if(err) console.log(err);
  });
});

module.exports = router;
