//dependencies
const path = require('path');


module.exports = function(app){
//home
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '../public/view.html'));
})
//signup
app.get("/signup", function(req, res){
  res.sendFile(path.join(__dirname, '../public/signup.html'));
})
//users
app.get("/users", function(req, res){
  res.sendFile(path.join(__dirname, '../public/users.html'));
})
//advertisers
app.get("/advertisers", function(req, res){
  res.sendFile(path.join(__dirname, '../public/advertisers.html'));
})
//adverstiser profile
app.get("/advertisers/:id", function(req, res){
  //code for single advertiser
})
//user profile
app.get("/users/:id", function(req, res){
  //code for single user
})

};
