var express = require('express');
var router  = express.Router();
var Picture = require('../models/pictureModel');

// create picture route
router.post('/create', (req , res) => {
  var newPic = new Picture({
    picname     : req.body.picname,
    pictureURL  : req.body.pictureURL,
    createdDate : req.body.createdDate,
    source      : req.body.source
  });

  newPic.save( (error) => {
    if(error){
      console.log(error);
      res.send(error);
    }
    res.send(newPic);
  })
});

// read all images route
router.get('/readall', (req , res) => {
  Picture.find( (err, result) => {
    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  })
});

// read single image route
router.get('/readsingle/:picID', (req , res) => {
  Picture.findOne({'_id' : req.params.picID}, (err, result) => {
    if(err){
     console.log(err);
    }
    else{
      res.send(result);
    }
  });
});

// update route
router.put('/update/:picID', (req , res) => {
  var update = req.body;
  Picture.findOneAndUpdate({'_id' : req.params.picID} , update , (err, result) => {
    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  });
});

// delete route
router.post('/delete/:picID', (req , res) => {
  Picture.remove({'_id' : req.params.picID}, (err, result) => {
    if(err){
      res.send(err);
      }
      else{
        res.send(result);
      }
  });
});


module.exports = router;
