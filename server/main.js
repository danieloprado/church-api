"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var timeout = require('connect-timeout');
var app = express();
app.use(timeout('5s'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.json('ok now restart');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('server start at ' + port);
});
