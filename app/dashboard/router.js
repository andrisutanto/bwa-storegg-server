var express = require('express');
var router = express.Router();
const { index } = require('./controller')

const { isLoginAdmin } = require('../middleware/auth')

// jadi sebelum masuk ke halaman index, dia harus melewati middlewarenya
router.use(isLoginAdmin)
router.get('/', index);

module.exports = router;

