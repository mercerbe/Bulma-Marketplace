//dependencies
const path = require('path')

var db = require('../models')

var sequelize = require('sequelize')

const session = require('express-session');

//-------------user routes----------------//
module.exports = app => {

  //login
  app.get('/login', (req, res) => {
    //check login
    if (req.session && req.session.authenticated) {
      var user = db.user.findOne({
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
        console.log('login as: ', user)
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
        console.log('new session:', req.session);
      }
    })
  })

  //signup
  app.post('/signup', (req, res) => {
    //create new user
    const user = db.user.build({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    console.log("new user: ", req.body);

    //save new user
    user.save().then( user => {
      req.username = user.username;
      req.session.authenticated = true;
      res.redirect('/login')
      console.log('session: ', req.session);
    })
  })

  //----------posts----------------//

  //save post
  app.post('/new', (req, res) => {
    const post = db.post.build({
      userId: req.session.userId,
      title: req.body.postTitle,
      body: req.body.postBody
    })
    post.save().then( post => {
      console.log(post)
      res.redirect('/home')
    })
  })

  //post to home
  app.post('/home', (req, res) => {
    const post = db.post.build({
      title: req.body.postTitle = req.session.post,
      body: req.body.postBody = req.session.post
    })
    console.log(req.session.post)
    post.save()
    res.redirect('/home')
  })

  //new like
  app.post('/like', (req, res) => {
    const like = db.like.build({
      like: true,
      userId: req.session.userId,
      postId: req.body.submitBtn
    })
    like.save().then( like => {
      console.log("liked: ", like);
      res.redirect('/likes')
    })
  })
}
