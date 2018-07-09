'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(modeles.user, {as:'user', foreignKey: 'userId'})
  };
  return post;
};
