const router = require("express").Router();
const apiRoutes = require("./APIs");

// Book routes
router.use("/", apiRoutes);

module.exports = router;
