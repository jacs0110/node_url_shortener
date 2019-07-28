'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    longUrl: DataTypes.STRING,
    shortUrl: DataTypes.STRING
  }, {});
  Link.associate = function(models) {
    // associations can be defined here
  };
  return Link;
};