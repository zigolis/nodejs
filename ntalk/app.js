var express = require('express')
  , routes = require('./routes/index')
  , users = require('./routes/users')
  , app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/', routes);
app.use('/usuarios', users);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});
