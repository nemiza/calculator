const { Router } = require('express');
const { calculate } = require('./handlers');

const router = Router();
router.get('/', calculate);

module.exports = router;