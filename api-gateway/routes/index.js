/*
============================================
; Title:  Assignment 2.3 - API Gateway Part II
; Author: Griselda Balmaceda
; Description: Index.js
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
