const controller = require("./controller");

exports.getAll = async (req, res) => {
    let func = await controller._getAll(req.query);

    func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

    return res.status(statusCode).send(func);
}