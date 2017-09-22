var app = require('./server/config/app');
var server = app.start();

var port = process.env.PORT || 8080;
