//depenencies
const express = require('express');
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');
const db = require('./models');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const sessoin = require('express-session');


const app = express();
const PORT = process.env.PORT || 8080;

//static route
app.use(express.static('public'));
app.use(express.static('semantic'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session
app.set('trust proxy', 1)
app.use(session({
  secret:'',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//-------------routes------------------//
require("./routes/views.js")(app);

//-----Listening and sync with db -------//
db.sequelize.sync()
  .then(() =>{
    app.listen(PORT, () => {
      console.log("app listening on port:", PORT);
    })
  })
