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
module.exports = mongoose.model('User', userSchema);

//adds a new user to the database 
module.exports.add=(user,callback)=>{
    user.save(callback)
}
module.exports.getById=(id,callback)=>{
    var query ={_id:id};
    User.findById(query,callback);
}