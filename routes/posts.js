const router = require("express").Router();
const jsonParser = require('body-parser').json();
const post = require("../controllers/postController");

router.post("/api/post", jsonParser, post.createPost);
router.get("/api/post", post.getPosts);

module.exports = router;