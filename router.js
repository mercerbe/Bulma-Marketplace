const express = require('express');
const passport = require('passport');
const UserController = require('./controllers/user');
const PostController = require('./controllers/post');

module.exports = function(app) {

  const userRouter = express.Router();
  const postRouter = express.Router();


// Middleware to protect routes
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())

    return next();
    res.redirect('/');
  }

  userRouter.post('/login/', passport.authenticate('local-login', {
        successRedirect: '/taulkback/home',
        failureRedirect: '/',
        failureFlash: true
    }));

    userRouter.get('/signup/', UserController.signup);
    userRouter.post('/signup/', passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup/',
      failureFlash: true
    }));


    userRouter.get('/', UserController.login);
    userRouter.get('/signup', UserController.signup);
    userRouter.get('/logout', UserController.logout);
    postRouter.get('/home', isLoggedIn, PostController.home);
    postRouter.get('/create', isLoggedIn, PostController.createForm);
    postRouter.post('/create', PostController.create);
    postRouter.get('/:id/like', PostController.like);
    postRouter.get('/:id/delete', PostController.delete);
    postRouter.get('/:id/likes', PostController.displayLikes);
    postRouter.get('/:id/edit', PostController.updateform);
    postRouter.post('/:id/update', PostController.update);

  app.use('/', userRouter);
  app.use('/taulkback/', postRouter);
};
