const controller = require('../controller/controller')

module.exports = (app) => {
app.get("/", controller.home)
app.get("/", controller.about)
app.get("/", controller.contract)
};