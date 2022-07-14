import { Router } from 'express';
import { actualizarProducto, crearProductos, editarProductos, eliminarProductos, guardarProductos, indexProductos } from '../controllers/tiendaController';
const router = Router();

/* GET home page. */
router.get('/', indexProductos);
router.get('/crear', crearProductos)
router.post('/', guardarProductos)
router.post('/eliminar/:id', eliminarProductos)
router.get('/editar/:id', editarProductos)
router.post('/actualizar', actualizarProducto)

export default router;