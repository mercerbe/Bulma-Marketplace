//depenencies
const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

//static route
app.use(express.static('public'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
