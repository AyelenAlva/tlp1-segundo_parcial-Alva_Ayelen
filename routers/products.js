const controlador = require('../controller/productsControlador');
const express = require('express');
const router = express.Router()

router.get('/', controlador.obtenerProducts)
router.get('/:id', controlador.obtenerProductsPorID)
router.post('/', controlador.crearProducts)
router.put('/:id', controlador.modificarPreoducto)
router.delete('/:id', controlador.eliminarproducto)




module.exports = router;