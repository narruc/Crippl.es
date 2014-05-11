//
// GIF trawler
//

var db      = require('./models');
var request = require("request");

db.sequelize.sync({ force: false }).complete(function(err) {
  if (err) {
    throw err[0]
  } else {
    request("http://api.giphy.com/v1/gifs/search?q=injury&api_key=dc6zaTOxFJmzC&limit=100&", function (err, response, body) {
      body = JSON.parse(body);

      for (var gif in body.data) {
        console.log(body.data[gif].images.original.url);

        var i = db.Image.build({
          userEmail: "s@crippl.es",
          url: body.data[gif].images.original.url,
          status: 1
        });

        i.save().success(function(i) {
          console.log("ok");
        }).error(function(err) {
          console.log(err);
        });
      }
    });

    request("http://api.giphy.com/v1/gifs/search?q=injury&api_key=dc6zaTOxFJmzC&limit=100&offset=100", function (err, response, body) {
      body = JSON.parse(body);

      for (var gif in body.data) {
        console.log(body.data[gif].images.original.url);

        var i = db.Image.build({
          userEmail: "s@crippl.es",
          url: body.data[gif].images.original.url,
          status: 1
        });

        i.save().success(function(i) {
          console.log("ok");
        }).error(function(err) {
          console.log(err);
        });
      }
    });

    request("http://api.giphy.com/v1/gifs/search?q=injury&api_key=dc6zaTOxFJmzC&limit=100&offset=200", function (err, response, body) {
      body = JSON.parse(body);

      for (var gif in body.data) {
        console.log(body.data[gif].images.original.url);

        var i = db.Image.build({
          userEmail: "s@crippl.es",
          url: body.data[gif].images.original.url,
          status: 1
        });

        i.save().success(function(i) {
          console.log("ok");
        }).error(function(err) {
          console.log(err);
        });
      }
    });
  }
});