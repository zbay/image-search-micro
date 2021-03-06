'use strict';

require('dotenv').config();
var mongoose = require('mongoose');
var db = mongoose.connection;
var express = require('express');
var app = express();
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var index = require('./routes/index.js');
var search = require('./routes/search.js');
var latest = require('./routes/latest.js');
var dotenv = require("dotenv");
mongoose.connect(process.env.MONGOLAB_URI, function (err, db)
//mongoose.connect('mongodb://localhost:27017/image-search-micro', function (err, db)
{
 if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB.');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static('./public'));
    
var port = process.env.PORT || 8080;
    
index(app);
search(app);
latest(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
}
});