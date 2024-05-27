const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programsActions");

router.get("/", browse);

module.exports = router;
