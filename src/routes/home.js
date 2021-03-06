const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.index);
router.post("/create", homeController.create);

module.exports = router;
