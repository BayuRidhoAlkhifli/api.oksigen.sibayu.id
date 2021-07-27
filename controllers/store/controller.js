const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const operationhour = require("../../models/operationhour");

exports._createData = async (params) => {
  try {
    let storeId;
    // let storeData = await model.Store
    //   .create(params)
    //   .then( async (result) => {
    //     // console.log(result.toJSON());
    //     storeId = result.id
    //   })
      console.log(Array.isArray(params.operationHour), params.operationHour);
      return {
        status: 200,
        message: "Successfully Create Client.",
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