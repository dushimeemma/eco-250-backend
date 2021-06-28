'use strict';
const {Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      //associations to be here
      
    };
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
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
    modelName: 'Product'
  })
  return Product;
};