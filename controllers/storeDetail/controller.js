const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const operationhour = require("../../models/operationhour");

exports._getAll = async (params) => {
    try {
        const storeDetail = await model.StoreDetail.findAll({
          include: [{
            model: model.Store,
          },{
            model: model.OperationHour,
          },{
            model: model.Regencies,
          }]
        });

        // store.forEach(stores => {
        //   console.log(stores.toJSON());
        // });

        return {
            status: 200,
            result: storeDetail
        }
    } catch (error) {
        return {
            status: 500,
            message: error.message,
        };
    }
}