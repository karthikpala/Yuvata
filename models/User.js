var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  dob: Date,
  age: Number,
  gender: String,
  address: String,
  phNum: String,
  accessLevel : String,
  facebook : {
	  id:String,token:String,name:String,email:String,photo:String
  }
});
mongoose.model('User', UserSchema);
