//dependencies
const path = require('path');
const bodyParser = require('body-parser');
const advertisers = require('../data/advertisers');
const users = require('../data/users');

//export all
module.exports = function(app){

//get users
app.get("/api/users", function(req, res){
  res.json(users);
});

//get advertisers
app.get("/api/advertisers", function(req, res){
  res.json(advertisers);
});

//post new users
app.post("/api/users", function(req, res){
//code for res here...
});

//post new advertiser
app.post("/api/advertisers", function(req, res){
//code for res here...
});

};
