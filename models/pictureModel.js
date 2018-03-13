var mongoose = require('mongoose');

var PicSchema = mongoose.Schema({
  picname     : {type:String , required:true},
  pictureURL  : {type:String , required:true},
  createdDate : {type:String , required:true},
  source      : {type:String}
});

var Picture = module.exports = mongoose.model('Pictures', PicSchema);
