var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;

mongoose.connection.on('open', function() {
  console.log('connected to mongo sucessfully');

    var emailSchema = mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      website: String,
      refferal: String,
      budget: String,
      startDate: String,
      projectDescription: String
    });

    var emailModel = mongoose.model('emailInquiry', emailSchema);


});

mongoose.connection.on('disconnect', function(){
  console.log("Mongo disconnected");
});

mongoose.connection.on('error', function(error){
  console.log('Connection Error', error);
});


module.exports = db;
