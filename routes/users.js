var express = require('express');
var router  = express.Router();
var User    = require('../models/userModel');

// base route
router.get('/', (req,res) => {
  res.send("<h1>Welcome To Zettabyte Task.</h1>");
});

// create route
router.post('/users/create', (req , res) => {
  var newUser = new User({
    username : req.body.username,
    name     : req.body.name,
    email    : req.body.email,
    password : req.body.password
  });

  newUser.save( (error) => {
    if(error){
      console.log(error);
      res.send(error);
    }
    res.send(newUser);
  });
});



// read all users route
router.get('/users/readall', (req , res) => {
  User.find( (err, result) => {
    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  })
});

// read single user route
router.get('/users/readsingle/:userID', (req , res) => {
  User.findOne({'_id' : req.params.userID}, (err, result) => {
    if(err){
     console.log(err);
    }
    else{
      res.send(result);
    }
  });
});

// update route
router.put('/users/update/:userID', (req , res) => {
  var update = req.body;
  User.findOneAndUpdate({'_id' : req.params.userID} , update , (err, result) => {
    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  });
});

// delete route
router.post('/users/delete/:userID', (req , res) => {
  User.remove({'_id' : req.params.userID}, (err , result) => {
    if(err){
      res.send(err);
      }
      else{
        res.send(result);
      }
  });
});


module.exports = router;
