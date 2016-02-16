// Dependencies
var mongoose = require('mongoose');
var User = require('./model.js');

// Opens App Routes
module.exports = function(app) {
  //Get routes
  //---------------------------------
  //Retrieve records for all users in the DB
  app.get('/users', function(req, res{

    // Uses Mongoose schema to run the search (empty conditions)
    var query = User.find({});
    query.exec(function(err, users){
      if(err)
          res.send(err);

      // If no errors are found it responds with a JSON of all usesr
      res.json(users);
    });
  });

  // POST Routes
  // --------------------------------
  // Provides method for saving new users in DB
  app.post('/users', function(req, res){

    // Creates a new user based on the mongoose schema
    var newuser = new User(req.body);

    // New User is saved in the DB
    newuser.save(function(err){
      if(err)
        res.send(err);

      // If no errors are found it responds with a JSON of the new user
      res.json(req.body);
    });
  });
});
