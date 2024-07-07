const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h1>You are so intelegent !</h1>");
  next();
});

module.exports = router;
