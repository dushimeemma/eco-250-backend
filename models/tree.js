'use strict';
const {Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    static associate(models) {
      //associations to be here
      
    };
  }
  Tree.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Tree'
  })
  return Tree;
};