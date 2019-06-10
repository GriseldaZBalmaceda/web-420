/*
============================================
; Title:  userSchema
; Author: Griselda Balmaceda
; Description: creating userSchema
;===========================================
*/
//creating userSchema
var mongoose = require('mongoose');

//userSchema incudes  username,password and email
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

//exporting userSchema
const User = module.exports = mongoose.model('User', userSchema);

//adds a new user to the database 
module.exports.add=(user,callback)=>{
    user.save(callback)
}
module.exports.getById=(id,callback)=>{
    var query ={_id:id};
    User.findById(query,callback);
}

//adding a new query to find individual users by email address 

module.exports.getOne = (e,callback)=>{
    var query = {email:e};
    User.findOne(query,callback)
}