var express = require('express');
var router = express.Router();
const {index} = require('./controller');

// routernya diarahkan ke index controlle
router.get('/', index);

module.exports = router;
