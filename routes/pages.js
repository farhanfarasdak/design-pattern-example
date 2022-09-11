const router = require("express").Router();
const page = require("../controllers/pageController");

router.get("/page/dashboard", page.postDashboard);

module.exports = router;