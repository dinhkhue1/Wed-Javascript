'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({

    catagoryId: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    shipping_address: DataTypes.STRING,
    city: DataTypes.STRING,
    payments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};