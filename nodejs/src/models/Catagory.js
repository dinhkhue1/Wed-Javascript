'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catagory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Catagory.init({

    productId: DataTypes.INTEGER,
    transport_fee: DataTypes.INTEGER, // phi van chuyen 
    voucher: DataTypes.STRING,
    active: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER, // so luong 
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Catagory',
  });
  return Catagory;
};