'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Store.hasOne(models.Regency, {
        foreignKey: "id",
        sourceKey: "regenciesId",
        as: "regencies"
      });

      models.Store.belongsToMany(models.OperationHour, {
        through: models.StoreDetail,
        foreignKey: "storeId",
        as: "operationHour"
      });

      // models.Store.belongsToMany(models.Regencies, {
      //   through: models.StoreDetail,
      //   foreignKey: "storeId"
      // });
    }
  };
  Store.init({
    storeName: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    storePicture: DataTypes.TEXT,
    mapLink: DataTypes.STRING,
    regenciesId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};