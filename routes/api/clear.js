var router = require("express").Router();
var clearController = require("../../controllers/clear.js");

router.get("/", clearController.clearDB);

module.exports = router;
