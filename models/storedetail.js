'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StoreDetail.init({
    storeId: DataTypes.INTEGER,
    operationHourId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'StoreDetail',
  });
  return StoreDetail;
};