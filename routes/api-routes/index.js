const router = require("express").Router();
const apiRoutes = require("./APIs");

// Book routes
router.use("/meal", apiRoutes);

module.exports = router;
