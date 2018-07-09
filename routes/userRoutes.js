//dependencies
const path = require('path')

var db = require('../models')

var sequelize = require('sequelize')

//user routes
module.exports = app => {

  //login
  app.get('/login', (req, res) => {
    //check login
    if (req.session && req.session.authenticated) {
      let user = db.user.findOne({
        where: {
          username: req.session.username,
          password: req.session.password
        }
      }).then(user => {
        if (user) {
          req.session.username = req.body.username;
          req.session.userId = user.dataValues.id;
          let username = req.session.username;
          let userid = req.session.userId;
          res.render('index', {
            user: user
          })
        }
      })
    } else {
      res.redirect('/home')
    }
  })

  //post login
  app.post('/login', (req, res) => {
    //post new login
    let username = req.body.username;
    let password = req.body.password;

    db.user.findOne({
      where: {
        username: username,
        password: password
      }
    }).then(user => {
      if (user.password == password) {
        req.session.username = username;
        req.session.userId = user.dataValues.id;
        req.session.authenticated = true;

        res.redirect('/home');

      } else {
        res.redirect('/login');
        console.log('testing new sessoin', req.session);
      }
    })
  })

  //signup
  app.post('/signup', (req, res) => {
    //create new user
    const user = db.user.build({

    })
  })


}
