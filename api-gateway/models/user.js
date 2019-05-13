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



