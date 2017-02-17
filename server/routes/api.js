/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('./../db/db.js');
const emailModel = require('./../models/email-inquiry');
const testimonialModel = require('./../models/testimonial');

/* GET api listing. */
router.get('/', (req, res) => {

  // This is only for testing....
  res.send('api works');

});

router.post('/testimonial', (req, res) => {
  console.log(req.body);

  var testimonial = new testimonialModel({
    author: req.body.testimonialAuthor,
    client: req.body.testimonialClient,
    content: req.body.testimonialContent
  });

  testimonial.save((err) => {
    if(err) console.log(err);
  });
});

// Get all posts
router.post('/sendEmail', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log('request', req);
  var smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // this auth is for app passwords from google
          user: 'garrett.sanderson@gmail.com',
          pass: 'rlbgaibqnensothb'
      }
  };

  var emailInquiry = new emailModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    refferal: req.body.refferal,
    budget: req.body.budget,
    startDate: req.body.startDate,
    projectDescription: req.body.projectDescription
  });

  emailInquiry.save(function(err){
    if(err) console.log(err);
  });

  var transporter = nodemailer.createTransport(smtpConfig);

  var mailOptions = {
      from: 'garrett.sanderson@gmail.com',
      to: 'garrett.sanderson@gmail.com',
      subject: 'Website Inquiry',
      text: 'test',
      html: `
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Phone: ${req.body.phone}</p>
        <p>Website: ${req.body.website}</p>
        <p>How Did You Hear About Me?: ${req.body.refferal}</p>
        <p>Budget: ${req.body.budget}</p>
        <p>Desired Start Date: ${req.body.startDate}</p>
        <p>Project Description: ${req.body.projectDescription}</p>
      `
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

module.exports = router;
