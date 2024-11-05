const express = require('express');
const router = express.Router();
const { all, add } = require("../controllers/employees");
const { auth } = require('../middleware/auth');

router.get("/", auth, all);
router.post("/add", auth, add);

module.exports = router;