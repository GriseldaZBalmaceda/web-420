/*
============================================
; Title:  API catalog
; Author: Griselda Balmaceda
; Description: Routing post and get requests
;===========================================
*/
//requireing necessary modules
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token')

//register new user
router.post('/auth/register', auth_controller.user_register);

//getting user token, using the checktoken rules
router.get('/auth/token',checkToken,auth_controller.user_token)

// allowing user login requests
router.post('/auth/login',auth_controller.user_login);

//allowing logout requests

router.get('/auth/logout',auth_controller.user_logout)



module.exports = router;