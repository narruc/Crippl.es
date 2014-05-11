//
// Crippl.es
//
// @author Shane Curran
// @author Rory Hughes
//
// @git https://github.com/narruc/Crippl.es
//

// Include all the necessary libraries etc.
var express = require('express')
  , routes  = require('./routes.js')
  , http    = require('http')
  , path    = require('path')
  , db      = require('./models')
 
var app = express()
 
// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))
 
// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}
 
app.get('/', routes.index);
 
db.sequelize.sync({ force: false }).complete(function(err) {
  if (err) {
    throw err[0]
  } else {
    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'))
    })
  }
})