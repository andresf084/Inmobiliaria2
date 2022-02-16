const express = require('express'),
router =  express.Router(),
cityMaster = require('../controllers/cityMaster.controller')

router.post('/', cityMaster.create)
router.get('/', cityMaster.list)
router.post('/search', cityMaster.search)

module.exports = router