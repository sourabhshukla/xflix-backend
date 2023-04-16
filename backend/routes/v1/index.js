const express = require("express");
const videoRoute = require("./videos.route.js");
const router = express.Router();



router.use("/videos", videoRoute);
module.exports = router;
