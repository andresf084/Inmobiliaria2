const express = require('express'),
router =  express.Router(),
propertyMaster = require('../controllers/propertyMaster.controller')
const {construirBusqueda} = require('../middleware/construirBusqueda.mw')
const {verificarToken} = require('../middleware/verificarToken.mw')

router.post('/', propertyMaster.create)
router.get('/', propertyMaster.list)
router.delete('/:_id', propertyMaster.delete)
router.put('/', propertyMaster.update)
router.get('/search', construirBusqueda, propertyMaster.search)

module.exports = router