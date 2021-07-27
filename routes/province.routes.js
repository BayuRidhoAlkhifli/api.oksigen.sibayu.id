module.exports = (app) => {
    const province = require('../controllers/province');

    app.get('/province', province.getProvinceAll)
}