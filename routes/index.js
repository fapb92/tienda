import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', (_, res) => {
    res.send("Bienvenido a la tienda virtual")
});

export default router;
