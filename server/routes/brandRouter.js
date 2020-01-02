const router = require("express").Router();
const getBrandCtrl = require("../controllers/brandCtrl");

router.get("/", getBrandCtrl.brandController);

module.exports = router;
