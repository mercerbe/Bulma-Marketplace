'use strict';

module.exports = (sequelize, DataTypes) => {
  const Advertiser = sequelize.define("Advertiser", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    companyName: DataType.STRING
  })
  return Advertiser;
}
