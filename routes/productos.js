import { Router } from 'express';
import { listaProductos } from '../controllers/tiendaController';
var router = Router();

/* GET home page. */
router.get('/', listaProductos);

export default router;
