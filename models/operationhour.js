'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperationHour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.OperationHour.belongsTo(models.StoreDetail);
      models.OperationHour.belongsToMany(models.Store, {
        through: models.StoreDetail,
        foreignKey: "operationHourId"
      });
    }
  };
  OperationHour.init({
    days: DataTypes.STRING,
    open: DataTypes.STRING,
    close: DataTypes.STRING,
    isClosed: DataTypes.BOOLEAN,
    isOpen24Hours: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OperationHour',
  });
  return OperationHour;
};