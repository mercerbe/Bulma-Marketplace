//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//express
const app = express();
const PORT = 3000;

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routing
require(path.join(__dirname, './routes/htmlRoutes'));
require(path.join(__dirname, './routes/apiRoutes'));
app.use(express.static(__dirname + '/public'));


//------------listen------------------//
app.listen(PORT, function(){
  console.log("App listening on PORT:" + PORT + "...");
})
