module.exports = (app) => {
    const store = require('../controllers/store');

    app.get('/store', store.getAll)
    app.get('/store/:regenciesId', store.getAllByRegencies)
    app.post('/store', store.createData)
}