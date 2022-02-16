const { Router } = require("express"),
router = Router();

router.use("/adviserMaster", require("../routes/adviserMaster.route"));
router.use("/cityMaster", require("../routes/cityMaster.route"));
router.use("/propertyMaster", require("../routes/propertyMaster.route"));

module.exports = router;