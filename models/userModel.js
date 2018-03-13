var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username : {type:String , unique:true , required:true},
  name     : {type:String , unique:true , required:true},
  email    : {type:String , unique:true , required:true},
  password : {type:String , required:true}
});

var User = module.exports = mongoose.model('User', UserSchema);
