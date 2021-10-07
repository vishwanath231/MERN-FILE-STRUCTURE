const express = require('express');
const router = express.Router();

const { getText } = require('../controller/dataController');


router
.route('/')
.get(getText)



module.exports = router;