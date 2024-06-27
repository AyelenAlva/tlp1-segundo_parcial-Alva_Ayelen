const controlador = require('../controller/productsControlador');
const express = require('express');
const router = express.Router()

router.get('/', controlador.obtenerProducts)
router.get('/:id', controlador.obtenerProductsPorID)


module.exports = router;