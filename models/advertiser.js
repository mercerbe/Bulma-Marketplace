'use strict';

module.exports = (sequelize, DataTypes) => {
  const Advertiser = sequelize.define("Advertiser", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    companyName: DataTypes.STRING
  })
  return Advertiser;
}
