//dependencies
const express = require('express');
//router
const router = express.Router();
const models = require('../models');


//sequelize
const sequelizeConnection = models.sequelize;
sequelizeConnection.sync();

//++++++++++++++++++++controller routes +++++++++++++++++++++//





module.exports = router;
