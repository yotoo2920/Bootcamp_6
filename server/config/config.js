//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://user:1234@ds135594.mlab.com:35594/assignment4', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyAHnByAnsLYXCWGUXED7wSJkpVBpIDksRQ'
  },
  port: 8080
};