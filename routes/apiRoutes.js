//dependencies
const path = require('path');
const bodyParser = require('body-parser');
const waitList = require('../data/avertiser');
const tableData = require('../data/user');

//export all
module.exports = function(app){

//get users
app.get("/api/users", function(req, res){
  res.json(tableData);
});

//get advertisers
app.get("/api/advertisers", function(req, res){
  res.json(waitList);
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
