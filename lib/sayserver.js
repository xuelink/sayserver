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

app.get('/sounds', function(req, res){
  var soundDirectory = process.env.SOUND_DIRECTORY || './ds/';
  fs.readdir(soundDirectory, function(err, files) {
    if (!Array.isArray(files)) {
      return res.send(500, 'No files found.');
    }

    if (err) {
      return res.send(500, err);
    }

    var aiffFiles = files.filter(function(f) {
      return path.extname(f) === '.aiff';
    });

    if (!Array.isArray(aiffFiles) || aiffFiles.length === 0) {
      return res.send(404, 'No *.aiff files found.');
    }

    res.send(200, aiffFiles);
  });
});

app.post('/speak', function(req, res){
  var text = req.param('text');  // second parameter is default
  var voice = req.param('voice') || 'Alex';
  var filename = randomstring.generate();

  // Text is required.
  if (!text) {
    return res.send(400, 'Bad request: speak text not specified.');
  }

  var say = require('./say')
  say.speak(voice, text, filename, function() {
    res.send(200);
  });

});

exports.start = function() {
  app.listen(process.env.PORT || 4000);
};
