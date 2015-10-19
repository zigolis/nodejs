var mongoose = require('mongoose')
  , config = require('../config.json')
  , env = process.env.NODE_ENV || "development"
  , url = config.MONGODB[env]
  , single_connection;

module.exports = function() {
  if (!single_connection) {
    single_connection = mongoose.connect(url);
  }
  return single_connection;
};