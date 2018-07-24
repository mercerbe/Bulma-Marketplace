const express = require('express');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash-messages');
const bodyParser = require('body-parser');
const models = require('./models');
const routes = require('./router');



const app = express();

// config view and static layout
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', './views')

app.use('/static', express.static('public'));
app.use(express.static('semantic'));

//body parser
app.use(bodyParser.urlencoded({extended: true}));

// passport user auth config
require('./controllers/passport');


//Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));


app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


// Router
routes(app);
const PORT = process.env.PORT || 8080

models.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`)
    });
  })




module.exports = app
