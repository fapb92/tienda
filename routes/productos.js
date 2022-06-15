import { Router } from 'express';
import { crearProductos, editarProductos, eliminarProductos, guardarProductos, indexProductos } from '../controllers/tiendaController';
var router = Router();

/* GET home page. */
router.get('/', indexProductos);
router.get('/crear', crearProductos)
router.post('/', guardarProductos)
router.post('/eliminar/:id', eliminarProductos)
router.get('/editar/:id', editarProductos)

export default router;
