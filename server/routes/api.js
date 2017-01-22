const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET api listing. */
router.get('/', (req, res) => {

  res.send('api works');

});

// Get all posts
router.get('/sendEmail', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log(res);
  console.log(req);
  var smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'garrett.sanderson@gmail.com',
          pass: 'rlbgaibqnensothb'
      }
  };

  var transporter = nodemailer.createTransport(smtpConfig);

  var mailOptions = {
      from: 'garrett.sanderson@gmail.com',
      to: 'garrett.sanderson@gmail.com',
      subject: 'Test',
      text: 'test'
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

module.exports = router;
