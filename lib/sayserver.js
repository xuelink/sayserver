var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var randomstring = require('randomstring');

app.use(express.bodyParser());

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

app.get('/', function(req, res){
  res.send('welcome to sayserver');
});

app.use('/media', express.static(path.join(__dirname, '../ds')));

app.post('/speak', function(req, res){
  var text = req.param('text');  // second parameter is default
  var voice = req.param('voice') || 'Alex';
  var filename = randomstring.generate();

  // Text is required.
  if (!text) {
    return res.send(400, 'Bad request: speak text not specified.');
  }

  var say = require('./say')
  say.speak(voice, text, filename, function(output) {
    res.end(output);
  });

});

exports.start = function() {
  app.listen(process.env.PORT || 4000);
};

exports.app = app;
