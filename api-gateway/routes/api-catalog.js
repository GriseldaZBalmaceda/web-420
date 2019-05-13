
//requireing necessary modules
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');


//register new user
router.post('/auth/register', auth_controller.user_register);

//getting user token
router.get('/auth/token', auth_controller.user_token);


module.exports = router;