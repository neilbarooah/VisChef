var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var api = require('./api/index');
var users = require('./api/profile');

var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');    // intercept OPTIONS method
   if (req.method === 'OPTIONS') {
       res.status(200).end();
   }
   else {
       next();
   }
};
//put this as the first middleware so that others do not
//complain about CORS
app.use(allowCrossDomain);

require('dotenv').config();

app.disable('x-powered-by');
app.set('port', 80);

app.use(bodyParser.json({limit: "10mb"}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true, parameterLimit:10000}));
app.use('/api', api);
app.use('/users', users);

app.use('/', express.static('public'));

app.listen(app.get('port'), () => {
  console.log('Server listening on port %d', app.get('port'));
});

module.exports = app;
