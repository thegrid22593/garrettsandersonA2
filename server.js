/*jshint esversion: 6 */
// Get Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./server/db/db');


// Get our routes
const api = require('./server/routes/api');
const admin = require('./server/routes/admin');

const app = express();

// Parsers for Post Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/admin', admin);

// Catch all other routes and return the index file that is attatched to Angular 2
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get Port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
