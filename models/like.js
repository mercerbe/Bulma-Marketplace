'use strict';
module.exports = (sequelize, DataTypes) => {
  var like = sequelize.define('like', {
    like: DataTypes.BOOLEAN
  }, {});
  like.associate = function(models) {
    // associations can be defined here
    like.belongsTo(models.user,{as : 'user', foreignKey: 'userId'})
    like.belongsTo(models.post,{as : 'post', foreignKey: 'postId'})
  };
  return like;
};
