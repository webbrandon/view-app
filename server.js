// Load "Site" components.
var data = require('./data');

var app = require('./app.js')(data);
var http = require('http');

app.set('port', process.env.PORT || 3000);

var httpServer = http.createServer(app).listen(app.get('port'));