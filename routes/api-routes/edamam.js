const router = require("express").Router();
const edamamController = require("../../controllers/edamamController");

// Matches with "/api/edamam"
router.route("/home").post(edamamController.findNutrient)


module.exports = router;