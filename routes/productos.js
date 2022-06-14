import { Router } from 'express';
import { crearProductos, guardarProductos, indexProductos } from '../controllers/tiendaController';
var router = Router();

/* GET home page. */
router.get('/', indexProductos);
router.get('/crear', crearProductos)
router.post('/', guardarProductos)

export default router;
