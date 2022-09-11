var express = require('express');
var router = express.Router();
const postRouter = require("./posts");
const pageRouter = require("./pages");

router.use(postRouter);
router.use(pageRouter);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
