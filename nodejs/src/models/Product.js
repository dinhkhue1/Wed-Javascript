'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({


    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,    // mo ta san pham
    thumbnail: DataTypes.STRING,    // hinh anh cua san pham
    back_thumbnail: DataTypes.STRING,
    price: DataTypes.INTEGER, //gia ban
    sold: DataTypes.STRING, // da ban hay chua
    inventory_quantity: DataTypes.INTEGER, // so luong hang con bao nhieu
    active: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};