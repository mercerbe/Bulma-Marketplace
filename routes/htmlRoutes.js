//dependencies
const path = require('path');


module.exports = function(app){
//home
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '../public/view.html'));
})
//user
app.get("/users", function(req, res){
  res.sendFile(path.join(__dirname, '../public/user.html'));
})
//advertiser
app.get("/advertisers", function(req, res){
  res.sendFile(path.join(__dirname, '../public/advertiser.html'));
})

};
