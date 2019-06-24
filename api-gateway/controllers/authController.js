/*
============================================
; Title:  Assignment 2.3 - API Gateway Part II
; Author: Griselda Balmaceda
; Description: creating authController
;===========================================
*/

var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config')

// Register a new user on POST
exports.user_register = function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    var newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email
    });
    User.add(newUser, (err, user) => {
        if (err)
            return res.status(500).send("There was a problem registering the user")
        var token = jwt.sign({id: user._id}, config.web.secret, {
            expiresIn: 86400
        });
        res.status(200).send({
            auth: true,
            token: token
        });
    });
};

// Verify token on GET
exports.user_token = function (req, res) {
        User.getById(req.userId, function (err, user) {
            if (err) return res.status(500).send('there was a problem finding the user');
            if (!user) return res.status(404).send('No user found.');
            res.status(200).send(user)
        });
  
};

//adding a new function to handle user login request

exports.user_login = function (req, res) {

    User.getOne(req.body.email, function (err, user) {
        if (err) return res.status(500).send('Error on server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) return res.status(401).send({
            auth: false,
            token: null
        })

        var token = jwt.sign({
            id: user._id
        }, config.web.secret, {
            expiresIn: 86400
        })

        res.status(200).send({
            auth: true,
            token: token
        })
    })
}
//adding a new function to handle user logout requests 
exports.user_logout = function (req, res) {
    res.status(200).send({
        auth: false,
        token: null
    });
}