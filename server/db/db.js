var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;

mongoose.connection.on('open', function() {
  console.log('connected to mongo sucessfully');
});

mongoose.connection.on('disconnect', function(){
  console.log("Mongo disconnected");
});

mongoose.connection.on('error', function(error){
  console.log('Connection Error', error);
});


module.exports = db;
