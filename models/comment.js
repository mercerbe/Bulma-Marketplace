'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.post, {as:'post', foreignKey: 'postId'})
  };
  return comment;
};
