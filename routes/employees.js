const express = require('express');
const router = express.Router();
const { all } = require("../controllers/employees");
const { auth } = require('../middleware/auth');

router.get("/", auth, all);


module.exports = router;