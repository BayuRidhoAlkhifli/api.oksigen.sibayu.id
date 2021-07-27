const controller = require("./controller");

exports.getProvinceAll = async (req, res) => {
    let func = await controller._getProvinceAll(req.query);

    func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

    return res.status(statusCode).send(func);
}