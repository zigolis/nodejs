module.exports = function() {
  var mongoose = require('mongoose');
  var env_url = {
    "test": "mongodb://localhost:27017/ntalk_test"
  , "development": "mongodb://localhost:27017/ntalk"
  };
  var url = env_url[process.env.NODE_ENV || "development"];
  return mongoose.connect(url);
};