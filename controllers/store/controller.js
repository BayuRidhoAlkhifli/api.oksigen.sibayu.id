const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const operationhour = require("../../models/operationhour");

exports._createData = async (params) => {
  try {
    const { storeData, operationData } = params;

    const store = await model.Store.create(storeData);
    const operations = await model.OperationHour.bulkCreate(operationData);


    if(!store || !operations) {
      return {
        status: 400,
        message: "error store data"
      }
    }

    const detailStoreData = operations.map(value => {
      return {
        storeId: store.id,
        operationHourId: value.id
      }
    });

    const createDetail = await model.StoreDetail.bulkCreate(detailStoreData)
    
    return {
      status: 200,
      message: "Successfully Input Store Data.",
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

exports._getAll = async (params) => {
  try {
    const store = await model.Store.findAll({
      attributes: ["id", "storeName", "phone", "address", "storePicture", "mapLink"],
      include: [{
        model: model.OperationHour,
        attributes: ["days", "open", "close", "isClosed", "isOpen24Hours"],
        as: "operationHour",
        through: {
          attributes: [],
        },
      },
      {
        model: model.Regency,
        attributes: ["name"],
        as: "regencies"
      }]
    });

    return {
      status: 200,
      result: store
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

exports._getAllByRegencies = async (regenciesId) => {
  try {
    const store = await model.Store.findAll({
      where: {
        regenciesId: regenciesId,
      },
      attributes: ["id", "storeName", "phone", "address", "storePicture", "mapLink"],
      include: [{
        model: model.OperationHour,
        attributes: ["days", "open", "close", "isClosed", "isOpen24Hours"],
        as: "operationHour",
        through: {
          attributes: [],
        },
      },
      {
        model: model.Regency,
        attributes: ["name"],
        as: "regencies"
      }]
    });

    return {
      status: 200,
      result: store
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};