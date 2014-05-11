var db = require("./models"),
    _ = require("lodash"),
    Image = db.Image;

exports.index = function(req, res) {
  Image.randomImage().success(function(i) {
    res.render('index', {
      image: i[0] // Getting the first one from the list
    });
  }).error(function(err) {
    res.render('500');
  });
};

exports.add = function(req, res) {
  var i = Image.build({
    userEmail: req.param('useremail'),
    url: req.param('imageurl'),
    status: 1 // For the moment, just set to accepted
  });
  i.save().success(function(i) {
    res.render('submitted', {
      message: "Image link saved!"
    });
  }).error(function(err) {
    res.render('500');
  });
};