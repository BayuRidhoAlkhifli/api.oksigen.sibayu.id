const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const operationhour = require("../../models/operationhour");

exports._getProvinceAll = async (params) => {
    try {
        // const province = await model.Province.findAll({
        //   attributes: ["id", "name"],
        //   include: [{
        //     model: model.Regency,
        //     attributes: ["name"],
        //     as: "regencies"
        //   }]
        // });

        const provinceSelect = await model.Province.findAll({
          attributes: [["name","label"]],
          include: [{
            model: model.Regency,
            attributes: [["id","value"],["name", "label"]],
            as: "options"
          }]
        });

        return {
            status: 200,
            result: provinceSelect
        }
    } catch (error) {
        return {
            status: 500,
            message: error.message,
        };
    }
}