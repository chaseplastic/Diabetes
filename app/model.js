// Pulls mongoose Dependency for creating schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creates a user Schema that defines how data is stored in the DB
var UserSchema = new Schema({
  username: {type: String, required: true},
  gender: {type: String, required: true},
  age: {type: Number, required: true}.
  favlang: {type: String, required: true},
  location: {type: [Number], required: true},
  htmlverified: String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

// Sets the creaeted_at paramater equal to the current time
UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now
  }
  next();
});

// Indexes schema in 2dsphere format critical for running proximity searches
UserSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere and names the mongodb collection
module.exports = mongoose.model('my-users', UserSchema);
