var express = require('express');
const { listaProductos } = require('../controllers/tiendaController');
var router = express.Router();

/* GET home page. */
router.get('/', listaProductos);

module.exports = router;
