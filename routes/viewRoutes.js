//dependencies
const db = require('../models')

//export view routes

module.exports = app => {

  //landing page
  app.get('/', (req, res) => {
    res.render('index')
  })

  //signup
  app.get('/signup', (req, res) => {
    res.render('signup')
  })

  //login
  app.get('/login', (req, res) => {
    res.render('login')
  })

  //homepage
  app.get('/home', (req, res) => {
    db.post.findAll({}).then(posts => {
      res.render('home', {
        posts: posts,
        name: req.session.username
      })
    })
  })

  //new post
  app.get('/new', (req, res) => {
    db.post.findAll({}).then( posts => {
      res.render('new', {
        posts: posts,
        name: req.session.username
      })
    })
  })

  //liked posts
  app.get('/liked', (req, res) => {
    db.like.findAll({
      include: [{
        model: db.user,
        as: 'user'
      }]
    }).then( likes => {
      res.render('likes', {
        likes: likes
      })
    })
  })

}
