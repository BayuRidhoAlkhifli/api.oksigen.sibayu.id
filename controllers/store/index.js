const controller = require("./controller");

exports.createData = async (req, res) => {
  let func = await controller._createData(req.body);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.getAll = async (req, res) => {
    let func = await controller._getAll(req.query);

    func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

    return res.status(statusCode).send(func);
};

exports.getAllByRegencies = async (req, res) => {
    let func = await controller._getAllByRegencies(parseInt(req.params.regenciesId));

    func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

    return res.status(statusCode).send(func);
};