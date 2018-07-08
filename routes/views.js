//dependencies
const path = require('path')

var db = require('../models')

var sequelize = require('sequelize')

//export view routes

module.exports = app => {

  //landing page
  app.get('/', (req, res) => {
    res.render('index')
  })
}
